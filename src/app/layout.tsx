import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "탐정사무소 코난 | 진실은 언제나 하나 · 범죄 피해자 전담",
  description: "가해자의 거짓말은 수십 가지이지만, 당신이 겪은 진실은 언제나 하나입니다. 2인의 대표 탐정이 '증거 불충분'의 벽을 깨고 법정의 적법한 증거를 찾아냅니다.",
  keywords: ["탐정사무소 코난", "범죄피해자탐정", "증거불충분", "합법증거수집", "사실조사", "스토킹증거", "사기피해추적"],
  openGraph: {
    title: "탐정사무소 코난 | 진실은 언제나 하나",
    description: "범죄 피해자 전담 2인 공인탐정사무소. 100% 합법 증거주의 · 대표 탐정 직접 수행 · 정보 영구 파기.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#06130E] text-[#E6EBE8] antialiased selection:bg-[#C8A97E]/30 selection:text-[#F4EDE4]">
        {children}
      </body>
    </html>
  );
}
