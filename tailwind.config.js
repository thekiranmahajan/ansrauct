/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector"],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
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
  plugins: [require("tailwindcss-bg-patterns")],
};
