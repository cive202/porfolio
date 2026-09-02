# Utsav Paneru — Portfolio

A Next.js (App Router + TypeScript + Tailwind) portfolio site, including live-pulled
project data plus pinned repos from GitHub and models/datasets from Hugging Face.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text content — experience, projects, GitHub repos, Hugging Face models — lives in
one place: `lib/data.ts`. Update it there and every section re-renders automatically.

The GitHub and Hugging Face data was pulled manually from:
- https://github.com/cive202?tab=repositories
- https://huggingface.co/cive202

If you want it to update automatically instead of being hand-edited, you could later
swap `lib/data.ts`'s `githubRepos` / `huggingfaceModels` for a fetch against the GitHub
REST API (`api.github.com/users/cive202/repos`) and the Hugging Face API
(`huggingface.co/api/models?author=cive202`) at build time.

## Deploy

The fastest path is [Vercel](https://vercel.com/new): push this folder to a GitHub repo,
import it in Vercel, and it deploys with zero config.

## Structure

```
app/
  layout.tsx          root layout, fonts, metadata
  page.tsx             assembles all sections
  globals.css
  components/
    Hero.tsx
    PipelineDiagram.tsx
    Nav.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    OpenSource.tsx      GitHub repos
    Models.tsx          Hugging Face models & datasets
    Education.tsx
    Footer.tsx
    SectionHead.tsx
lib/
  data.ts              all content in one place
```
# porfolio
