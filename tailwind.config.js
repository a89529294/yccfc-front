/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./util/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        1.5: "6px",
        2.5: "10px",
      },
      backgroundImage: {
        "main-g-map": 'url("/main-g-map.png")',
        "down-chevron": 'url("/meals/down-chevron.svg")',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "noto-sans": ["'Noto Sans TC'", "sans-serif"],
      },
      colors: {
        "green-primary": "rgb(58, 119, 82)",
        "orange-primary": "#E86E2A",
        "red-primary": "#DD4040",
        "grey-dark": "#9F9F9F",
        "grey-light": "#F5F5F5",
        "grey-medium": "#D9D9D9",
        body: "#4B4B4B",
        "alpha-blue": "#5889B7",
        "bland-celery": "#76955E",
      },
      width: {
        container: "520px",
      },
      gridTemplateColumns: {
        "news-container": "repeat(auto-fill, minmax(200px,1fr))",
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
