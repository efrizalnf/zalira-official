/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'hp': '320px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    keyframes: {
      marquee: {
        '0 %': { left: '0' },
        '100%': { left: '-100%' },
      }
    },
    animation: {
      marquee: 'marquee 5s linear infinite'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },

  },
  plugins: [],
}
