export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      width: {
        menu: "var(--menu-width)",
        "menu-mobile": "var(--menu-width-mobile)",
        "right-sidebar": "var(--right-sidebar-width)",
      },
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
  },
  plugins: [],
};
