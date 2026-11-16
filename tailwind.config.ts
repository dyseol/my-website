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
        forest: {
          900: "#0F382A",
          800: "#164E3A",
          700: "#1D644A",
        },
        gold: {
          400: "#D4AF37",
          500: "#C5A880",
          600: "#A88D65",
        },
      },
    },
  },
  plugins: [],
};
export default config;
