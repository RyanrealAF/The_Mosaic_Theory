# Cloudflare Pages Deployment & Automation Guide

This project has been fully configured for automated continuous deployment (on-commit) to your Cloudflare Pages URL: **https://the-mosaic-theory.pages.dev/**

---

## 🚀 How It Works

We have set up a dual-engine architecture:
1. **Frontend**: Vite + React, compiled statically to the `dist` folder.
2. **Backend APIs**: Built using **Cloudflare Pages Functions** (under `/functions`), executing serverless functions inside V8 isolates. That compiles routes like `/api/chat` and `/api/health` directly into the worker wrapper of your Pages site.
3. **Local Dev & Preview**: Binds normally to your Express server (`server.ts`) for standard, rapid container development and previews inside Google AI Studio.

---

## 🛠️ Step 1: Initial Cloudflare Pages Setup

If you have not already linked your repository, follow these quick steps:

1. **Log in** to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Choose your GitHub repository representing your project code.
4. Set up the **Build Settings**:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build:pages` *(Note: This utilizes our optimized Vite-only static compilation script!)*
   - **Build Output Directory**: `dist`
5. Click **Save and Deploy**.

---

## 🔑 Step 2: Configure your `GEMINI_API_KEY` Secret

To ensure that the AI academic chat on your live site (`/api/chat`) works, secure the API key inside Cloudflare Pages:

1. In your Cloudflare Dashboard, go to your Pages project (**the-mosaic-theory**).
2. Go to **Settings** > **Environment variables**.
3. Under **Production** (and optionally **Preview**), click **Add variable**.
4. Define the variable:
   - **Variable name**: `GEMINI_API_KEY`
   - **Value**: `Your_Real_Gemini_API_Key_From_AI_Studio`
5. Click **Save**.
6. *Note: Re-deploy your latest build for environmental changes to take effect!*

---

## 🤖 Step 3: Automatic Deploy-On-Commit via GitHub Actions

We have preinstalled a GitHub workflow at `.github/workflows/deploy.yml` to trigger automatic production builds whenever code is pushed to your `main` or `master` branch.

To enable GitHub Actions to push deployments to Cloudflare:
1. Generate a **Cloudflare API Token**:
   - Go to your Cloudflare Profile > **API Tokens** > **Create Token**.
   - Use the **Cloudflare Pages** template (gives read/write access to Pages).
2. Get your **Cloudflare Account ID**:
   - Available on your Cloudflare Dashboard homepage (sidebar right column) or inside your Workers/Pages area URL.
3. Add these as **Repository Secrets** in GitHub:
   - In your GitHub Repository, go to **Settings** > **Secrets and variables** > **Actions**.
   - Add `CLOUDFLARE_API_TOKEN` (your API token).
   - Add `CLOUDFLARE_ACCOUNT_ID` (your Account ID).

Now, every commit you push to GitHub will automatically trigger a clean build, compile code files, bundle the Edge endpoints, and deploy to your subdomain under https://the-mosaic-theory.pages.dev/!
