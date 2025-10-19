import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  experimental: {
    optimizeCss: false, // Preserve original CSS during migration
  },
};

export default nextConfig;