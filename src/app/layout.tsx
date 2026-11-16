import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "법률사무소 로앤이 | 오직 피해자만 변호합니다",
  description: "억울하고 힘든 상황에 처한 피해자의 눈물을 닦고 일상을 되찾을 수 있도록 처음부터 끝까지 함께합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased bg-[#F9FAF9] text-[#1B2421]">
        {children}
      </body>
    </html>
  );
}
