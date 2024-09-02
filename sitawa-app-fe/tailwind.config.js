/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #9BEC00 0%, #06D001 100%)',
        'custom-button': 'linear-gradient(to bottom, #9BEC00 0%, #06D001 80%)',
      },
    },
  },
  plugins: [],
}
