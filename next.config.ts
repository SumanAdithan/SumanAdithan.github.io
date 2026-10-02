import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static HTML export for GitHub Pages (written to ./out)
  output: "export",
  // GitHub Pages project repos are served from /<repo>; the deploy workflow sets this
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  // The default image optimizer needs a server, which a static export doesn't have
  images: { unoptimized: true },
};

export default nextConfig;
