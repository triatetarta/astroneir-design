const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    important: true,
    colors: colors,
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
