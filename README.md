# The Mosaic Theory — Medico-Legal Academic Ledger

An interactive scholarly resource and intelligent search assistant analyzing the psychological, physiological, and constitutional facets of **Coordinated Directed Social Aggression (DSA)**.

This digital treatise acts as a public medical-legal ledger holding dual academic papers on algorithmic targeting, the "Tip-Badge Loop" (the weaponization of administrative tools to trigger unwarranted police involvement), and systemic, crowd-sourced civil harassment.

**Live Deployment:** [https://the-mosaic-theory.pages.dev/](https://the-mosaic-theory.pages.dev/)
**Development Core:** Vite + React + Cloudflare Pages Functions (Serverless Edge)

---

## 🏛️ Executive Summary of Research

This application provides a multidimensional, interactive index of two central treatises exploring Directed Social Aggression:

1. **Document I: Physiological Damage and Constitutional Injury**
   - **Focus:** The biological toll of coordinated psychological aggression and tactical isolation.
   - **Core Concept:** The *Allostatic Stress Collapse* & *HPA Activation Path*. Evaluates how elevated cortisol triggers severe cell atrophy in the hippocampal CA3 region, micro-structural prefrontal fatigue, autonomic dysregulation (reduced Heart Rate Variability), and premature cellular telomere shortening (accelerating biological deterioration by multiple years).
   - **Remedial Focus:** Exploring asymmetrical protective mechanisms, including redundant legal-medical records and automated dead man's switches.

2. **Document II: The Jurisprudential & Bio-Social Convergence of the Mosaic Theory**
   - **Focus:** Adapting Fourth Amendment spatial tracking logic into peer-surveillance circles.
   - **Core Concept:** *The Mosaic Theory of Surveillance* (*United States v. Jones*, *Carpenter v. United States*). Demonstrates how discrete, harmless individual acts (a checkout look, a door slam, a transit entry timestamp logged by citizens) form an actionable, unconstitutional warrantless surveillance net when aggregated.
   - **Remedial Focus:** Civil harassment routes (*CCP § 527.6*), joint state action liability (*42 U.S.C. § 1983* under *Adickes* & *Dennis* joint action doctrine), and Title II ADA accommodation locks for neurobiological exhaustion.

---

## 🧩 Key Architecture & Features

Designed with a high-contrast **Editorial Broadside layout**, the application incorporates:

* **Executive Synopsis**: High-level structural digests and medical-legal indexes.
* **Physiological Cascade**: An interactive nodular diagram tracing physiological markers, from amygdala overload to biological aging markers, complete with peer-reviewed medical citations.
* **Constitutional Matrix**: An deep dive of corresponding constitutional levers (First, Fourth, Fourteenth Amendments, and ADA requirements) across mobile-responsive accordion panels.
* **Scholarly Document Index**: The complete integrated texts of both legal-medical documents, indexed with an active regex filter bar.
* **AI Academic Assistant**: A fully integrated Gemini prompt hub capable of referencing the combined literature dynamically to answer user questions with medical and judicial citations (McEwen, Sapolsky, Epel, Thayer; Paul v. Davis, Carpenter, Dennis v. Sparks).

---

## ⚙️ Project Tech Stack

- **Framework**: React 18+ with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS configured directly in `@import "tailwindcss";`
- **Animations**: `motion` layout and slide translations (imported from `motion/react`)
- **Icons**: Lucide React
- **Cloud Engine (Web API)**: Express API routes mapped locally + Cloudflare Pages serverless `/functions/api/chat` for live, highly responsive edge inference.

---

## 📦 Local Development

If you configuration is set to develop locally or test inside a sandbox, follow the instructions below:

```bash
# 1. Clone repository
git clone https://github.com/yourusername/Midi.git # (or your specific hub)
cd the-mosaic-theory

# 2. Install dependencies
npm install

# 3. Spin up development server (Express + Vite Proxy)
npm run dev
# -> Runs on port 3000
```

To compile standard production builds for static sites:
```bash
npm run build:pages
# Outputs static HTML, CSS, JS inside /dist
```

---

## ☁️ Cloudflare Pages Deploy-On-Commit

The application runs a **dual-build environment**:
- Inside **AI Studio Development**: It runs through `server.ts` utilizing an Express proxy for Gemini API calls securely.
- Inside **Cloudflare Pages Production**: It uses a serverless V8 edge worker located under `/functions/api/chat.ts` to coordinate serverless API requests securely.

### Automatic GitHub Action
Automated deployments are fully supported via the `.github/workflows/deploy.yml` workflow:
Pushing to the `main` or `master` branches of your GitHub repository triggers automated tests, lints, and compiles directly into your live **the-mosaic-theory** subdomain.

For a detailed walkthrough on setting up secrets (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) and configuring the required `GEMINI_API_KEY` in Cloudflare's settings dashboard, see [CLOUDFLARE.md](./CLOUDFLARE.md).
