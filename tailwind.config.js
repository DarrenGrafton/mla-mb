const defaultTheme = require("tailwindcss/defaultTheme")

const defaultFontFamily = defaultTheme.fontFamily

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
    },
    fontFamily: {
      //sans is body, serif is heading
      sans: ["Source Sans Pro", ...defaultFontFamily["sans"]],
      serif: ["Libre Baskerville", ...defaultFontFamily["serif"]],
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [require("daisyui")],
}
