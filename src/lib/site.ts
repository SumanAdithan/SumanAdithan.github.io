import { profile } from "@/data/resume";

// Sub-path the site is served from. Empty for a root deploy (e.g. SumanAdithan.github.io);
// "/portfolio" for a GitHub Pages project repo. Set by the deploy workflow.
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

// Public URL of the deployed site (including basePath), used for canonical links, Open Graph,
// sitemap and robots. The GitHub Pages workflow sets it; override for a custom domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:3000${basePath}`).replace(/\/$/, "");

// Prefixes a /public asset path with basePath. next/image and plain <a href> don't do this automatically.
export const asset = (path: string) => `${basePath}${path}`;

export const siteTitle = `${profile.name} – ${profile.role} | Next.js, NestJS & AI`;

export const siteDescription =
  "Suman is a Software Engineer building full-stack web, mobile, and AI-powered products with Next.js, NestJS, React Native, LangChain, and LangGraph.";
