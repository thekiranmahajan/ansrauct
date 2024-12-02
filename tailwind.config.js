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
        "custom-black": "#0A0A0A",
        "custom-blue": "#4F46E5",
      },
    },
  },
  plugins: [],
};
