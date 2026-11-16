import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        conan: {
          950: "#06130E", // 가장 깊은 시네마틱 블랙그린
          900: "#0A1D16", // 메인 딥그린 배경
          800: "#0F2B21", // 카드 및 서피스 배경
          700: "#163D2F", // 호버 및 보더
          600: "#225844", // 포인트 그린
          500: "#2F755B",
        },
        champagne: {
          300: "#F4EDE4",
          400: "#E3D3C1",
          500: "#C8A97E", // 메인 샴페인 골드
          600: "#AA8A5F",
          700: "#866943",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif KR", "Batang", "serif"],
        sans: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
