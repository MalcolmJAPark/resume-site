/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#ff6b35',
          50: '#fff3ec', 100: '#ffe6d9', 200: '#ffc6ad', 300: '#ffa582',
          400: '#ff8557', 500: '#ff6b35', 600: '#e85a2c', 700: '#c34822', 800: '#9e371b', 900: '#782813'
        }
      },
      boxShadow: { accent: '0 0 0 3px rgba(255, 107, 53, 0.25)' }
    },
  },
  plugins: [],
}
