/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '820px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'}, 
      '2xl':{'min':'1280px'},
      '3xl': {'min': '1535px'}
    }
  },
  plugins: [],
}
