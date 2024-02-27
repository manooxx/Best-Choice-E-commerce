/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      rob: ["roboto", 'sans-serif'],
      job: ['Josefin Sans', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}
