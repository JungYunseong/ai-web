import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바이브컴퍼니 - AI·빅데이터 선도기업",
  description: "바이브컴퍼니는 Big Data로 시장을 읽고 AI로 업무 혁신을 만들어 갑니다. AX 시대, 전략적 파트너로서 사람과 기술이 함께 성장하는 미래를 만들어갑니다.",
  keywords: "AI, Big Data, RAG, LLM, 자연어 처리, 인공지능, 데이터 분석, 데이터 추론, 트렌드, 인사이트, 검색엔진, 챗봇, KMS, 리서치, 리포트",
  openGraph: {
    title: "바이브(VAIV)",
    description: "비즈니스 AI+Data. 시장을 읽는 데이터와 검증된 AI 솔루션을 제공합니다.",
    siteName: "바이브(VAIV)",
  },
  twitter: {
    title: "바이브(VAIV)",
    description: "비즈니스 AI+Data. 시장을 읽는 데이터와 검증된 AI 솔루션을 제공합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="./pretendardvariable-dynamic-subset.min.css" />
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}