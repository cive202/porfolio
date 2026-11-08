---
title: "Documenting Building AI-Powered Investor Intelligence Platform"
date: 2026-11-05
type: post
summary: ""
tags: [meta]
---

Whats up fellas, haven't seen some non-AI slop for while? Let me guide you through this journey of building an **AI-Powered**(so to say) Investing Assistant

# Resources 

> [Source Code](https://github.com/cive202/investor-platform) <br>
> [Site](http://investor-assistant.duckdns.org) -> this will die after 19th Nov, 2026 (AZURE subscriptions are too expensive)

# Inital Desgin 
![Physical Desgin](/physical_desgin.jpg)
![Logical Desgin](/logical_desgin.jpg)

# Tech Stack

## Framework and Language

- **Next.js 14.2** (App Router) for routing, rendering, and the build pipeline
- **React 18.3** for UI components
- **TypeScript 5.5** for type-safe application and component code

## Styling

- **Tailwind CSS 3.4** for utility-first styling
- **PostCSS** and **Autoprefixer** for CSS processing and vendor prefixes
- **Global CSS** (`app/globals.css`) for base styles

## Content and Blog

- **Markdown** files stored in `content/` as the source for blog posts
- **gray-matter** to parse frontmatter (title, date, and other metadata)
- **marked** to render Markdown bodies to HTML

## Tooling

- **npm** as the package manager (`package-lock.json`)
- **Next.js scripts:** `npm run dev`, `npm run build`, `npm run start`, `npm run lint`
- **ESLint** via `next lint`
- **@types/node**, **@types/react**, and **@types/react-dom** for type definitions
