/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'image-fixed': 'calc(100vh - 64px)',
      }
    }
  },
  plugins: [require("daisyui")]
}