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
  // GitHub Pages에서 정적 파일 경로 문제 해결
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
