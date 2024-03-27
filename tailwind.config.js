/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jade',
  ],
  theme: {
    fontFamily: {
      sans: ['Futura', 'Helvetica', '"Noto Sans JP"', 'sans-serif'],
    },
    extend: {
      colors: {
        red: '#fe0940',
        green: '#00ee02',
        orange: '#fe6d01',
        purple: '#c900fc',
        blue: '#0908f2',
        lightBlue: '#00d6f9',
        yellow: '#fecf02',
      },
      maxWidth: {
        xs: '420px',
      },
      maxHeight: {
        full: '100%',
      },
    },
  },
  plugins: [],
}
