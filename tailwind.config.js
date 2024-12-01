/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      aspectRatio: {
        video: '16 / 9', // Add a custom aspect ratio for videos
      },
    },
  },
  plugins: [],
};
