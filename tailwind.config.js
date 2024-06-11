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
        "eb-garamond": ["EB Garamond"],
        "open-sans": ["Open Sans"],
      },
      fontSize: {
        10: ["10px", "12px"],
        12: ["12px", "14px"],
        14: ["14px", "18px"],
        16: ["16px", "20px"],
        20: ["20px", "28px"],
        24: ["24px", "32px"],
        32: ["32px", "40px"],
        40: ["40px", "48px"],
        48: ["48px", "56px"],
        56: ["56px", "64px"],
        64: ["64px", "72px"],
        72: ["72px", "80px"],
        80: ["80px", "88px"],
        120: ["120px", "160px"],
      },
      colors: {
        thq: {
          "background-light": "#F3F3F3",
          "background-dark": "#1A1A1A",
          "text-light": "#F4F7E0",
          "text-dark": "#333333",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
