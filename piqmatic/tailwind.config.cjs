/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        background: '#ffffff',
        lightGray: '#D9D9D9',
        strongGreen: '#4CA64C',
        mediumGreen: '#329932',
        lightGreen: '#7FBF7F',
        brightGreen: '#89E045',
        textWhite: '#ffffff',
        textBlack: '#000000'
      }
    },
  },
  plugins: [],
}
