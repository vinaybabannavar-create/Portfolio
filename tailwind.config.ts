import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0B0C0A",
          surface: "#141612",
          card: "#181A16",
          border: "#262923",
          hover: "#20231D",
        },
        ivory: {
          DEFAULT: "#F1F0E8",
          muted: "#D0D0C5",
          dim: "#A2A49B",
        },
        stone: {
          DEFAULT: "#92958B",
          dark: "#5A5D54",
          light: "#B8BAB0",
        },
        lime: {
          accent: "#D4FF4F",
          dim: "#A8D432",
          glow: "rgba(212, 255, 79, 0.15)",
        },
        amber: {
          accent: "#D9A66C",
          dim: "#B88349",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
