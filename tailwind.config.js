/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#7F8487',
          200: '#FFF8BC',
        }
      },
      fontFamily: {
        body: ['Varela Round']
      }
    },
  },
  plugins: [],
}
