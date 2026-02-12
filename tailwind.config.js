/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      dropShadow: {
        'xl': '0 35px 35px rgba(0, 0, 0, 0.25)',

        'yellow': '0 35px 35px rgba(255, 255, 0, 1) ',
        'yellow-gray': '0 35px 35px rgba(255, 255, 0, 0), 0 35px 35px rgba(31, 41, 55, 0.25)',
      
      },
      screens:{
        "xs":"300px"

      },
      
    },
  },
  plugins: [],
}

