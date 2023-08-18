/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      backgroundColors: {
        'main': '#0a0a0a',
        'headerIcon': '#171719',
        'mainBG': '#141414'
      },
      fontFamily: {
          'minecraft': ['minecraft']
      }
    },
  },
  plugins: [],
}
