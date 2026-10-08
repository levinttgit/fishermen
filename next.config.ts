import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fishermen',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
