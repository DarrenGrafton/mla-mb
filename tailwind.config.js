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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B91C1C",
          "primary-focus": "#B91C1C",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#001b69",
          "accent-focus": "#001b69",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
}
