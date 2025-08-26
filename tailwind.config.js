/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode via a CSS class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'netflix-dark': "#4d4d4d",
        // netflix: {
        //   red: "#E50914",
        //   dark: "#141414",
        // },
      },
    },
  },
  
  plugins: [],
};
