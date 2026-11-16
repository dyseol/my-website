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
          950: "#06130E", // 베이스 다크 블랙그린
          900: "#0A1D16", // 서브 다크그린
          800: "#0F2B21", // 카드 및 서피스
          700: "#163D2F", // 보더 및 구분선
          600: "#225844", // 인터랙션 하이라이트
          500: "#2F755B",
        },
        champagne: {
          300: "#F4EDE4",
          400: "#DFCAAC",
          500: "#C8A97E", // 브랜드 샴페인 골드
          600: "#AA8A5F",
          700: "#866943",
        },
        text: {
          primary: "#FFFFFF",
          body: "#E6EBE8",
          muted: "#8E9F97",
          subtle: "#5F736A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif KR", "serif"],
        sans: ["var(--font-sans)", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
