import { GoogleGenAI } from "@google/genai";
import { combinedDocumentFullText } from "../../src/data/document";

interface Env {
  GEMINI_API_KEY?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const reqBody: any = await context.request.json();
    const { message, history } = reqBody;

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message input is required." }),
        { 
          status: 400, 
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          } 
        }
      );
    }

    const key = context.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
      // Return the fallback response if API key is not configured under Cloudflare environment variables
      return new Response(
        JSON.stringify({
          error: "Missing API Key",
          details: "GEMINI_API_KEY is not configured in your Cloudflare Pages dashboard. Please configure it in your dashboard settings > Environment Variables.",
          isFallbackActive: true,
          fallbackReply: `[Mock AI Assistant Mode: GEMINI_API_KEY not configured]

The dual academic treatises cover several key concepts across two primary scientific documents:
1. **The Tip-Badge Loop (Doc I & II)**: The feedback loop converting private narrative malicious campaigns (tips) into state police actions, producing chronic biological stress and joint action state attribution.
2. **Physiological Collapse & Allostatic Load (Doc I & II)**: Cortisol overdrive leading to CA3 hippocampal cell atrophy, reduced HRV, elevated blood-pressure, chronic IL-6 immune-inflammatory response, and cellular mitotic clock telomere shortening (accelerating biological age by 10+ years).
3. **Mosaic Theory & Ninth Circuit Privacy Standing (Doc II)**: Evaluating sequence-snapshot combinations as a holistic entity. Under *United States v. Yang*, *Patel v. Facebook*, and *Sanchez v. LADOT*, continuous localized tracking structures constitute warrantless surveillance.
4. **California Civil Harassment Statutes (Doc II)**: Application of *California Code of Civil Procedure § 527.6*, proving a knowing and willful "course of conduct" pattern based on objective/subjective distress bars (*Schild v. Rubin*, *McConkey v. Steel*).
5. **Section 1983 Joint Action Enmities (Doc II)**: Pleading public-private joint enterprise under *Dennis v. Sparks*, *Rawson v. Recovery Innovations*, and municipal *Monell* deliberate indifference patterns.

To unlock the live academic AI assistant and ask tailored questions directly to the model across both documents, please configure a valid **GEMINI_API_KEY** in your Cloudflare Pages dashboard environment variables!`
        }),
        { 
          status: 200, 
          headers: { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          } 
        }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });

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

    const contents: any[] = [];
    
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

    return new Response(
      JSON.stringify({ text: response.text }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        } 
      }
    );

  } catch (error: any) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request with Gemini on Cloudflare Pages.",
        details: error.message
      }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        } 
      }
    );
  }
};

// Handle OPTIONS preflight requests for CORS if needed
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
};
