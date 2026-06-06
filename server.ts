import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { documentFullText, combinedDocumentFullText } from "./src/data/document";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
      throw new Error("GEMINI_API_KEY is not configured or holds a placeholder value. Please set your real API Key in the Settings > Secrets panel of Google AI Studio.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// REST route for Document Q&A using Gemini-3.5-flash
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message input is required." });
    }

    let ai;
    try {
      ai = getAiClient();
    } catch (err: any) {
      console.warn("AI client init failed:", err.message);
      return res.status(401).json({
        error: "Missing API Key",
        details: err.message,
        isFallbackActive: true,
        fallbackReply: `[Mock AI Assistant Mode: GEMINI_API_KEY not configured]

The dual academic treatises cover several key concepts across two primary scientific documents:
1. **The Tip-Badge Loop (Doc I & II)**: The feedback loop converting private narrative malicious campaigns (tips) into state police actions, producing chronic biological stress and joint action state attribution.
2. **Physiological Collapse & Allostatic Load (Doc I & II)**: Cortisol overdrive leading to CA3 hippocampal cell atrophy, reduced HRV, elevated blood-pressure, chronic IL-6 immune-inflammatory response, and cellular mitotic clock telomere shortening (accelerating biological age by 10+ years).
3. **Mosaic Theory & Ninth Circuit Privacy Standing (Doc II)**: Evaluating sequence-snapshot combinations as a holistic entity. Under *United States v. Yang*, *Patel v. Facebook*, and *Sanchez v. LADOT*, continuous localized tracking structures constitute warrantless surveillance.
4. **California Civil Harassment Statutes (Doc II)**: Application of *California Code of Civil Procedure § 527.6*, proving a knowing and willful "course of conduct" pattern based on objective/subjective distress bars (*Schild v. Rubin*, *McConkey v. Steel*).
5. **Section 1983 Joint Action Enmities (Doc II)**: Pleading public-private joint enterprise under *Dennis v. Sparks*, *Rawson v. Recovery Innovations*, and municipal *Monell* deliberate indifference patterns.

To unlock the live academic AI assistant and ask tailored questions directly to the model across both documents, please configure a valid **GEMINI_API_KEY** in the Secrets panel in AI Studio settings!`
      });
    }

    const systemInstruction = `You are an expert academic and medico-legal AI assistant specializing in the following research papers:
1. "Physiological Damage and Constitutional Injury Under Coordinated Directed Social Aggression: A Medico-Legal Analysis of the Tip-Badge Loop and Distributed Targeting Campaigns" (Document I)
2. "The Jurisprudential and Bio-Social Convergence of the Mosaic Theory: A Medico-Legal Analysis of Coordinated Directed Social Aggression" (Document II)

The entire texts of both papers have been provided to you in the context. Your goal is to help readers understand these dense, comprehensive documents in an objective, professional, and accessible manner.

Here is the integrated scientific context:
=== START OF PAPERS ===
${combinedDocumentFullText}
=== END OF PAPERS ===

Guidelines:
1. Answer questions clearly, accurately, and objectively based on the papers.
2. Provide specific legal case citations (e.g., Adickes v. S.H. Kress, Paul v. Davis, Carpenter, United States v. Jones, Monell, United States v. Yang, Patel v. Facebook, Sanchez v. LADOT, Dennis v. Sparks, Rawson v. Recovery Innovations, Pasadena Republican Club, O'Handley v. Weber, Salka v. Drake) and medical studies/concepts (e.g., McEwen 1993, Sapolsky 1996, Epel 2004, Thayer 2000, Cacioppo 2003, allostatic collapse model) when answering corresponding topics.
3. Keep your tone scholarly, clinical, non-emotional, and objective.
4. Do not offer legal or medical advice; maintain that you represent the analysis of these published documents.
5. Keep explanations structured, easy to digest, and concise. Highlight key technical terms with markdown bold structure.`;

    // Format standard contents structure or use chats
    const contents: any[] = [];
    
    // Add history if present
    if (history && Array.isArray(history)) {
      history.forEach((turn: any) => {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return res.status(500).json({
      error: "An error occurred while processing your request with Gemini.",
      details: error.message
    });
  }
});

// App health check
app.get("/api/health", (req, res) => {
  res.json({ status: "alive" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
