/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C4385",
        accent: "#DF9755",
        success: "#218838",
      },
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
