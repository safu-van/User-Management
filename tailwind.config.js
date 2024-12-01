/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        'dvh': '100dvh', // You can define specific values like 50dvh, etc.
      },
    },
  },
  plugins: [],
}

