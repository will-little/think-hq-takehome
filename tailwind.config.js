/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        "roboto-serif": ["Roboto Serif"],
      },
      fontSize: {
        10: ["10px", "12px"],
        12: ["12px", "14px"],
        14: ["14px", "18px"],
        16: ["16px", "20px"],
        20: ["20px", "28px"],
        24: ["24px", "32px"],
        32: ["32px", "40px"],
        48: ["48px", "56px"],
        56: ["56px", "64px"],
        64: ["64px", "72px"],
        72: ["72px", "80px"],
        120: ["120px", "160px"],
      },
      colors: {
        charcoal: {
          DEFAULT: "#222222",
          light: "#F7F8F9",
          hover: "#000000",
        },
        translate: {
          dark: "#0D0F12",
          gray: {
            DEFAULT: "#CEC9C6",
            hover: "#211E1D",
            light: "#f1faee",
            dark: "#4C4541",
          },
          background: {
            DEFAULT: "#211E1D", // dark background for sections
          },
          error: "#FE3F38",
          "light-green": "#CBE7D2",
          "light-green-hover": "#EFFCF2",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
