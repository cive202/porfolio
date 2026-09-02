import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#12141f",
        paper: "#f7f5ef",
        paperline: "#ddd9cd",
        textdark: "#1b1e29",
        textdim: "#5b5c66",
        textlight: "#f2f1ec",
        textlightdim: "#a9abc0",
        violet: "#6e67f3",
        amber: "#d98e3f",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
