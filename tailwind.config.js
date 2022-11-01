/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          'd':'#ffcc00',
          'm':'#ffde5c',
          'l':'#ffeb99',
        },
        secondary: '#603808',
      },
      fontFamily:{
        primary: 'Lobster',
        body: 'Poppins',
      },
      backgroundImage: {
        'primary-gradient':"linear-gradient(to right, rgba(237,137,54), rgb(234 179 8))",
      },
    },
  },
  plugins: [],
}
