/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        sans: ['Montserrat','sans-serif'], 
      },
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar'),
  ],
}