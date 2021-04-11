module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-gray": "#696871",
        "brown-color":"#9F3919",
        "dark-black": "#19191B",
        orange: "#FF7143",
        "blue-custom": "#5454D4",
        "light-gray":"#F8F8F8",
        "free-color":"#1D293F",

      },
      width: {
        81: "71.65rem",
        82: "29rem",
        75:'34.75rem'
      },
      height: {
        40: "40.25rem",
        41: "28.8rem",
        73:'29.56rem'
      },
    },
    fontFamily: {
      dm_sans: ["DM Sans"],
      mulish: ["Mulish"],
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontSize: {
      xs: [".75rem", "72px"],
      sm: [".875rem", "72px"],
      tiny: [".875rem", "72px"],
      base: ["1rem", "72px"],
      lg: ["1.125rem", "72px"],
      xl: ["1.25rem", "72px"],
      "2xl": ["1.5rem", "72px"],
      "3xl": ["1.875rem", "72px"],
      "4xl": ["2.25rem", "72px"],
      "5xl": ["3rem", "72px"],
      "6xl": ["4rem", "72px"],
      "7xl": ["5rem", "72px"],
      audience: ["80px", "72px"],
      free:["17px", "60px"]
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderStyle: ["hover", "focus"],
    },
  },

  plugins: [],
};
