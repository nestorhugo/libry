/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/components/home/home.component.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2E4BB7",
        secondary: "#DEC69F",
        accent: "#95D177",
        cinza: "#A7A7A7",
      },
    },
  },
  plugins: [],
};
