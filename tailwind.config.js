/** @type {import('tailwindcss').Config} */
const top100YCC = require("top-100-yc-companies");
const { yc100colors } = top100YCC;
const { reddit, dropbox1 } = yc100colors;

export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        reddit, dropbox1
      },
      transitionDelay: {
        '0': '0ms',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('ch', '& > *');
      addVariant('ch2', '& > * > *');
      addVariant('ch3', '& > * > * > *');
    }
  ],
}

