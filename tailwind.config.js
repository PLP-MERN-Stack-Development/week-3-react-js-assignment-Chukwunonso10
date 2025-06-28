/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 THIS enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
