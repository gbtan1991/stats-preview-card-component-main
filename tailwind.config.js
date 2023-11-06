/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryVeryDarkBlue: 'hsl(233, 47%, 7%)',
        primaryDarkSaturatedBlue: 'hsl(244, 38%, 16%)',
        primarySoftViolet: 'hsl(277, 64%, 61%)',
        neutralWhite: 'hsl(0, 0%, 100%)',
        neutralTransparentWhiteMain: 'hsla(0, 0%, 100%, 0.75)',
        neutralTransparentWhiteStat: 'hsla(0, 0%, 100%, 0.6)'
      }
    },
  },
  plugins: [],
}

