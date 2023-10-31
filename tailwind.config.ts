import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#F3EDE8",
        secondary: "#AE6449",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        libre: ["var(--font-libre)"],
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
        cardo: ["var(--font-cardo)"],
        nunito: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
