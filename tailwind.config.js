/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
        tertiary: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        darkColor: "var(--dark-color)",
        mainTextColor: "var(--primary-text-color)",
        buttonColor: "var(--button-color)",
        goldenColor: "var(--golden-color)",
        "new-secondary": "#aaa6c3",
        "new-tertiary": "#151030",
        "new-primary": "#050816",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0 35px 120px -15px #211e35",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/img/bg/herobg.png')",
    },
  },
  plugins: [require("daisyui")],
};
