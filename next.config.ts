import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["via.placeholder.com"],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-web/' : '',
};

export default nextConfig;
