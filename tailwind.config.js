/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "maroon": "#690A12",
        "orange": "#89CB42F",
        "dim-gray": "#5E4640",
        "yellow-green": "#DF5421",
        // "tan" :
      },
    },
  },
  plugins: [],
};
