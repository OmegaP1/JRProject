module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      button: "#4d637e",
      button_hover: "#506886",
    },
    extend: {
      animation: {
        "spin-slow": "wiggle 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "33%": { transform: "rotate(3deg)" },
          "66%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
