/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //"candara": "Signika"
        "candara": "Montserrat"
      },
      width: {
        '128': '32rem', // You can adjust the value as needed
        '256': '64rem',
        '192': '48rem',
        // Add more sizes as needed
      },
    },
  },
  plugins: [("daisyui")],
  
}


