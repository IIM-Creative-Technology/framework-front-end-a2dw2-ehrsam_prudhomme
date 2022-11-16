/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:'#8D4ED8',
        light_purple:'#F3EDFB',
        font:'#0A0909',
      }
    },
  },
  plugins: [],
}
