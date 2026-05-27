import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2647",
        teal: "#2C7865",
        gold: "#E9B741",
        light: "#F8F9FA",
        dark: "#1E293B",
        gray: "#475569",
      },
    },
  },
  plugins: [],
};
export default config;
