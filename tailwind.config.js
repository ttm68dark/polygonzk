/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      "light-text": "rgba(255, 255, 255, 0.75)",
      ...colors,
    },
    extend: {
      backgroundImage: {
        "head-bg": "url('assets/background/head-bg.png')",
        "head2-bg": "url('assets/background/head2-bg.png')",
        "nav-bg": "url('assets/background/nav-bg.png')",
      },
    },
  },
  plugins: [],
}
