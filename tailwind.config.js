// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: {
          100: "#5FB4A2",
          400: "#203A4C",
          700: "#33323D",
        },
        neutral: {
          100: "#FAFAFA",
          400: "#EAEAEB",
          700: "#D7D7D7",
        },
        error: "#F43030",
      },
      fontFamily: {
        primary: ["var(--font-public-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
