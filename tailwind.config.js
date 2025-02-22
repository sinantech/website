/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mont)"],
      },
    },
  },
  plugins: [],
};
