const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}