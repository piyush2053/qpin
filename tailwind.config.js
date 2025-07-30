/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        bg1: "#030712",
        bg2: "#1D202A",
        pBlue:"#00BCFF"
      }
    },
  },
  plugins: [],
};
