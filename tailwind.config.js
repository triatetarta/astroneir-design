const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    important: true,
    colors: colors,
    container: {
      center: true,

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1800px",
        "2xl": "2400px",
      },
    },
    extend: {
      colors: {
        "astro-red": "#ef2f5e",
        "astro-blue": "#411aff ",
        "astro-pink": "#e936b0",
      },
      fontFamily: {
        supreme: ["Supreme"],
      },
    },
  },
  plugins: [],
};
