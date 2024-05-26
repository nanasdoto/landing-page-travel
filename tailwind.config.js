/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        circular: ["Circular STD"],
      },

      colors: {
        xpink: ["#F85E9F"],
        xpurple: ["#5D50C6"],
        xorange: ["#FF5722"],
        xblack: ["#191825"],
      },

      dropShadow :{
        xsmall: ["0px 856px 240px 0px rgba(0, 0, 0, 0.00), 0px 548px 219px 0px rgba(0, 0, 0, 0.01), 0px 308px 185px 0px rgba(0, 0, 0, 0.04), 0px 137px 137px 0px rgba(0, 0, 0, 0.06), 0px 34px 75px 0px rgba(0, 0, 0, 0.07), 0px 0px 0px 0px rgba(0, 0, 0, 0.07)"],
      }
    },
  },
  plugins: [],
};
