/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dongle: ['Dongle']
      },
      colors: {
        loafer: "#fbfcf6",
        mountainMeadow: '#23c686',
        cello: "#1d3853",
        deco: "#c5d893",
        juniper: "#7a9295",
        matrix: "#ac5b4d",
        yellowOrange: "#fc9d45",
        anakiwa: "#9fcdfd",
        japaneseLaurel: "#099d02",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')({ nocompatible: true }),],
}
