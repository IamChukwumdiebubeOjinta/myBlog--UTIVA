/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './Pages/**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}