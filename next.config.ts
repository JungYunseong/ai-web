import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 환경에서는 정적 내보내기 설정을 비활성화
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
    basePath: '/ai-web',
  }),
  images: {
    unoptimized: true,
    domains: ["via.placeholder.com"],
  },
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
