/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        toggle: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic - bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic - bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "ping-slow": "ping 5s linear infinite"
      },
    },
    fontFamily: {
      CustomFont: ["Poppins", "sans-serif"],
      CustomFont1: ["Noto Serif Makasar", "serif"],
      CustomFont2: ["Monoton", "cursive"],
    },
  },
  plugins: [],
};

