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
        "noto-sans": ["'Noto Sans TC'", "sans-serif"],
      },
      colors: {
        "green-primary": "rgb(58, 119, 82)",
        "orange-primary": "#cf612e",
        "red-primary": "#DD4040",
        container: "#F5F5F5",
        body: "#4B4B4B",
      },
      width: {
        container: "520px",
      },
      gridTemplateColumns: {
        "news-container": "repeat(auto-fill, minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
