import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'source-sans': ['"Source Sans Pro"', 'sans-serif'], // Add all weights of Source Sans Pro
      },
    },
    colors: {
      "galaxy-neutral": {
        400: "#64748B",
        200: "#E3E8EF"
      },
      "shade-dark":"#18181B",
      ...colors
    }
  },
  plugins: [],
} satisfies Config;
