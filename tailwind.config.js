/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx}",
    "./public/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        italianno: ["Italianno", "cursive"],
      },
      letterSpacing: {
        ultra: "-0.1em",
      },
      colors: {
        cream: {
          DEFAULT: "#FDFBF6",
        },
        foreground: "hsl(26 26 26)",
        background: "hsl(25 25 25)",
        primary: {
          DEFAULT: "hsl(25 25 25)",
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(30 30 30)",
          foreground: "hsl(26 26 26)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 96.1%)",
          foreground: "hsl(0 0% 45.9%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 96.1%)",
          foreground: "hsl(26 26 26)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(0 0% 98%)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
