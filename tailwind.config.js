/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./index2.html",
      "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'pixel': ['"Press Start 2P"', 'cursive'],
        },
        colors: {
          'retro-beige': '#F5F5DC',
          'retro-black': '#000000',
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [],
  }