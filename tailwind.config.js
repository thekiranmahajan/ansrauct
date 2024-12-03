/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', defaultTheme.fontFamily.serif],
      },
      colors: {
        // MARS Color Palates
        primary: "#0000A0",
        secondary: "#00D7B9",

        // HILTI Color Palates
        // primary: "#D2051E",
        // secondary: "#671A3D",
      },
    },
  },
  plugins: [],
};
