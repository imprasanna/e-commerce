/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ysabeau: ["Ysabeau Infant", "sans-serif"],
        // screens: {
        //   xl: { max: "1279px" }, // Extra large screens and up
        //   lg: { max: "1023px" }, // Large screens and up (desktop)
        //   md: { max: "767px" }, // Medium screens and up (tablet)
        //   sm: { max: "639px" }, // Small screens and up (mobile)
        // },
      },
    },
  },
  plugins: [],
};
