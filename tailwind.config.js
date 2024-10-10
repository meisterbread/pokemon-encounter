/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      },
      backgroundImage:{
        'menu' : "url('/src/assets/menu-bg.png')",
      }
    },
  },
  plugins: [],
}

