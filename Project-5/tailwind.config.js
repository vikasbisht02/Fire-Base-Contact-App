/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey:"#5F5959",
        yellow:"#FFEAAE",
        darkYellow:"#FCCA3F",
        orange:"#F6820C",
      },
    },
  },
  plugins: [],
}