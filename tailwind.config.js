/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "MuktaRegular": "MuktaRegular",
        "MuktaBold": "MuktaBold",
      },
      backgroundImage: {
        "login-bg": "url('/assets/loginPage/loginBg.png')",
      },
      colors: {
        "primary": "#0B646B",
        "secondary": "#F2F2F2",
        "tertiary": "#F2F2F2",
        "quaternary": "#F2F2F2",
        basic: "#071C03",
        gery: "#686868",
        yellow: "#FEDB9B",
        purple: "#C0BFF9",
        red: "#D21D1D",
        "light-grey": "#F2F2F2",
      },
    },
  },
  plugins: [],
}

