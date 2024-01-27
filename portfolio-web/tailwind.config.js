/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": 'class',
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('../src/assets/img/background/bg-1.png')",
        'fondoDark': "url('../src/assets/img/background/darkmode.png')"
			 
      }
    },
  },
  plugins: [],
}
