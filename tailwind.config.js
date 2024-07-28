/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // this is saying that all the files which has extentions above the tailwind css will work on this file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}