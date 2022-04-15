module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "#031927",
        secondary: "#D10000",
        "button-2": "#E7E9EA",
        "black-transparent": "rgba(0,0,0,0.3)",
        card: "#F6F6F6",
        white: "#ffffff",
        success: "#06a800",
        black: "#000000",
        hover: "#E7E7E7",
        danger: "#e31717",
      },
      boxShadow: {
        sm: "0px 5px 5px 0px rgba(0,0,0,0.3)",
        xl: "0px 5px 5px 0px rgba(0,0,0,0.5)",
        "2xl": "0px 5px 5px 0px rgba(0,0,0,0.7)",
      },
      fontSize: {
        xs: "13px",
        base: "14px",
        "2xl": "20px",
        "3xl": "25px",
        "4xl": "30px",
        "5xl": "45px",
        "7xl": "65px",
        "8xl": "90px",
        lg: "20px",
      },
      maxHeight: {
        90: "90vh",
        225: "225px",
        500: "500px",
        565: "565px",
        800: "800px",
      },
      maxWidth: {
        300: "300px",
        330: "330px",
        400: "400px",
        565: "565px",
        700: "700px",
        1000: "1000px",
        1150: "1150px",
        1180: "1180px",
        1300: "1300px",
        1500: "1500px",
        1800: "1800px",
      },
      minWidth: {
        280: "280px",
      },
      minHeight: {
        300: "300px",
        400: "400px",
        450: "450px",
      },
      zIndex: {
        "-10": "-10",
      },
      screens: {
        "3xl": "2400px",
        "4xl": "2700px",
        "5xl": "3000px",
        "6xl": "3300px",
      },
      padding: {
        600: "600px",
        750: "750px",
        900: "900px",
        1100: "1100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
