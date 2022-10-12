/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
