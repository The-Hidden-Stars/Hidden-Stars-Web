module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-800': "rgba(255, 255, 255, 0.25)",
        'gray-900': "#191919",
      },
    },
  },
  plugins: [],
}
