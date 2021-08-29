module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#DE8667',
        secondary: '#EFB467',
        dark: '#322D38',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
