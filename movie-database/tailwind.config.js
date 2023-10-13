/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#3490dc', // Replace with your desired color
        'secondary': '#ffed4a', // Replace with another color
      },
      backgroundOpacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
      },

    },
  },
  plugins: [],
}

