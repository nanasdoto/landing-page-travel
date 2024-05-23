/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },

      colors: {
        xpink: ["#F85E9F"],
        xpurple: ["#5D50C6"],
        xorange: ["#FF5722"],
        xblack: ["#191825"],
      },
    },
  },
  plugins: [],
};
