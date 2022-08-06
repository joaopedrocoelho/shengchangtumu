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
      minHeight: {
        500: "500px",
      },
      colors: {
        baseYellow: "#F8B108",
      },
      backgroundImage : {
        'heroDemo': 'linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.7) 100%), url("../public/img/hero_demo.jpg")'
      }
    },
  },
  plugins: [],
};
