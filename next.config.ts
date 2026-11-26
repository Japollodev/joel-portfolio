import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to ./out (served by Cloudflare Workers static assets).
  output: "export",
  images: {
    // The Next.js image optimizer needs a server; serve images as-is instead.
    unoptimized: true,
  },
};

export default nextConfig;
