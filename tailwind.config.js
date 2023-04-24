// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
        primary: colors.teal,
        neutral: colors.gray,
      },
      fontFamily: {
        primary: ["var(--font-public-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
