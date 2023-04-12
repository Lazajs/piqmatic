/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
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
      },
      width: {
        minMobile: '360px'
      },
      padding: {
        small: '1rem',
        medium: '2rem',
        large: '4rem',
        larger: '6rem'
      },
      margin: {
        smaller: '1rem',
        small: '2rem',
        medium: '4rem',
        large: '6rem',
        larger: '8rem'
      },
      fontSize: {
        small: '1.4rem',
        normal: '1.8rem',
        large: '2.2rem',
        larger: '2.6rem'
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        bold: '500',
        black: '700'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
