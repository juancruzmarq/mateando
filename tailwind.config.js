/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "custom-black": "#0a0908",
        "custom-blue": "#22333b",
        "custom-white": "#f2f4f3",
        "custom-brown-light": "#a9927d",
        "custom-brown-dark": "#5e503f",
      },
    },
  },
  plugins: [],
};
