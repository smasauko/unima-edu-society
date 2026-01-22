/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E5AA8",
        secondary: "#3B82F6",
        accent: "#E11D48",
      },
    },
  },
  plugins: [],
}
