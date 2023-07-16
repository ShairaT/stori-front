/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}", "./index.html"],
  purge: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xxs: "300px",
      xs: "480px",
      xsm: "670px",
      sm: "768px",
      md: "940px",
      lg: "1270px",
      xl: "1920px",
    },
    colors: {
      lightBlue: "#bde7f3",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
