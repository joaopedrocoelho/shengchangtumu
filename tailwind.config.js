/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        500: "500px",
        600: "600px",
      },
      colors: {
        baseYellow: "#F8B108",
      },
    },
  },
  plugins: [],
};
