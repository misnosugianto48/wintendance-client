/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wintendance-secondary": "#00EAD3",
        "wintendance-primary": "#005F99",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
