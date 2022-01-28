module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'mezo-orange': '#eb5e55',
      },
      colors: {
        'mezo-dark': '#3a3335',
        'mezo-red': '#d81e5b',
        'mezo-white': '#fdf0d5',
        'mezo-blue': '#c6d8d3',
      },
    },
  },
  plugins: [],
};
