/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: 'url("/main-bg.png")',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "green-primary": "rgb(58, 119, 82)",
      },
    },
  },
  plugins: [],
};
