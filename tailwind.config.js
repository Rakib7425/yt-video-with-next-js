/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/**/*.jsx'],
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}