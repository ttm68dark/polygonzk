/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      "light-text": "rgba(255, 255, 255, 0.75)",
      "grey-text": "rgba(255, 255, 255, 0.5)",
      ...colors,
    },
    container: {
      center: true,
    },
    fontFamily: {
      LucidaConsole: ["LucidaConsole", "Sans-serif"],
      AldrichRegular: ["Aldrich-Regular", "Sans-serif"],
      InterMedium: ["Inter-Medium", "Sans-serif"],
      ...fontFamily,
    },
    extend: {
      backgroundImage: {
        "head-bg": "url('assets/background/head-bg.png')",
        "head2-bg": "url('assets/background/head2-bg.png')",
        "s2-bg": "url('assets/background/s2-bg.png')",
        "s2mb-bg": "url('assets/background/s2-mobile.png')",
        "s4-bg": "url('assets/background/s4-bg.png')",
        "nav-bg": "url('assets/background/nav-bg.png')",
      },
    },
  },
  plugins: [],
}
