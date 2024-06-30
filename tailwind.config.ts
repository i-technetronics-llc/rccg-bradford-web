import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4283f0",
        secondary: "#9a5bb7",
        tetiary: "#fee7b2",
        primaryF: "#4283f030",
        secondaryF: "#9a5bb730",
        tetiaryF: "#fee7b230",
      },
    },
  },
  plugins: [],
};
export default config;
