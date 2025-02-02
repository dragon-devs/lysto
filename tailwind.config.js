/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
      },
      colors: {
        "primary": {
            100: "#e5edf8",
            200: "#799ff6",
            300: "#216afd",
            400: "#052964",
        },
        accent: {
            100: "#f2f2f2",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#5b5b5b",
          300: "#051026",
        },
        danger: "#c53515"
      }
    },
  },
  plugins: [],
}