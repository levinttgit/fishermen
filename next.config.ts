import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fishermen',
  images: {
    unoptimized: true,
  },
  experimental: {
    agentUpgrade: 'security' as any,
  },
};

export default nextConfig;
