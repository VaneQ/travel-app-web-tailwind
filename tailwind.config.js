/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'bali': "url('../img/bali.jpg')",
        'chicago': "url('../img/chicago.jpg')",
        'yosemite': "url('../img/yosemite.jpg')",
        'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'europe' : "url('../img/europe.jpg')",
        'iceland': "url('../img/iceland.jpg')",
        'LA': "url('../img/LA.jpg')",
        'miami': "url('../img/miami.jpg')",
        'new_york': "url('../img/new_york.jpg')",
        'norway': "url('../img/norway.jpg')",
        'seattle': "url('../img/seattle.jpg')",
        'switzerland': "url('../img/switzerland.jpg')",
        'sydney': "url('../img/sydney.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#7EBAE5',
        'secondary': '#F9ECCD',
        'terciary': '#FFFBF1',
        'quartiary': '#FCA371',
        'quintiary': '#A3440E',
        'sixtiary': '#321302',
        'septuary': '#CE4C03'
      }),
      textColor:{
        'primary': '#7EBAE5',
        'secondary': '#F9ECCD',
        'terciary': '#FFFBF1',
        'quartiary': '#FCA371',
        'quintiary': '#A3440E',
        'sixtiary': '#321302',
        'septuary': '#CE4C03'
      },
      fontFamily:{
        Glegoo:['Glegoo','sans-serif']
      },
      ringColor:{
        'primary': '#7EBAE5',
        'secondary': '#F9ECCD',
        'terciary': '#FFFBF1',
        'quartiary': '#FCA371',
        'quintiary': '#A3440E',
        'sixtiary': '#321302',
        'septuary': '#CE4C03'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
