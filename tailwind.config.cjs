module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /^text-[a-z]+-[0-9]+$/
    }
  ],
  theme: {
    extend: {
      colors: {
        orange: "#ff9500",
        "dark-orange": "#db8000",
      },
      scale: {
        1.02: "1.02",
      },
    },
  },
  plugins: [],
};
