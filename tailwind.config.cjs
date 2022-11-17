/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,svg,jpeg,jpg}",
  ],
  theme: {
    extend: {
      colors:{
        purple:'#8D4ED8',
        light_purple:'#F3EDFB',
        font:'#0A0909',
        gris:'rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
