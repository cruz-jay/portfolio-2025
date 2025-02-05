/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/home/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0A2A",
        gold: "#B8860B",
      },
      fontFamily: {
        custom: ["Melagllik", "sans-serif"],
        custom2: ["Chillen", "sans-serif"],
        custom3: ["Didot", "sans-serif"],
      },
    },
  },
  plugins: [],
};
