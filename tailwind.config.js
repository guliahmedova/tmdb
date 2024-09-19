/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '5xl': "5120px"
      },
      colors: {
        "dark_blue": "#032541"
      }
    },
  },
  plugins: [],
}