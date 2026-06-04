/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#030a14",
          900: "#050d1a",
          800: "#07101e",
          700: "#0d1f3c",
        },
        electric: "#1d8cf8",
        cyan: "#00d4ff",
        muted: "#8ba0c0",
      },
    },
  },
  plugins: [],
};
