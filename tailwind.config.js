/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-blue': '#cfe2ff',
        'mint-green': '#d4f4dd',
        'pastel-red': '#ffd6d6',
        'light-yellow': '#fff3cd',
        'dark-text': '#1a1a1a',
      },
    },
  },
  plugins: [],
};