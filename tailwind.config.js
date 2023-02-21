/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fragment Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
