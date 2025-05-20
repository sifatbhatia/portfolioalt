/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./components/**/*.{js,jsx,ts,tsx}", // Ensures ShadCN components are included
  ],
  theme: {
    extend: {
      fontFamily: {
        mattone: ['Mattone', 'sans-serif'],
        baseNeue: ['BaseNeueTrial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
