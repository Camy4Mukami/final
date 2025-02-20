import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ac0412",
          light: "#c21523",
          dark: "#960310",
        },

        secondary: {
          DEFAULT: "#9d1e28",
          dark: "370B0E",
        },

        accent: {
          DEFAULT: "#ffeaec",
          transparent: "rdba (255, 234, 236, 0.15)",
        },
        dark: {
          primary: {
            DEFAULT: "#ff1f2d",
            light: "#ff4d57",
            dark: "#d90412",
          },
          secondary: {
            DEFAULT: "#cf2632",
            dark: "#4a0f13",
          },
          accent: {
            DEFAULT: "#2c0609",
            transparent: "rgba(44, 6, 9, 0.15)",
          },
          background: "#1a1a1a",
          surface: "#2d2d2d",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-sarif"],
        merriweather: ["Merriweather", "serif"],
        agu: ['Agu Display', 'sans-serif'],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
