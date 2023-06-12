/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'mam': '8rem'
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
