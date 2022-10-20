/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: "350px",
      //smaller screens => @media (min-width: 350px) { ... }
      sm: "300px",
      // => @media (min-width: 500px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        transparent: "transparent",
        deepblue: {
          600: "#000",
        },
      },
      border: {
        lined: " 2px solid #ea580c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
