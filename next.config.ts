import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production deployment
  images: {
    unoptimized: true,
  },
  // Configure webpack for better module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
    };
    return config;
  },
};

export default nextConfig;