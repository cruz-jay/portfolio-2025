/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/useX86/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Melagllik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
