module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
            black: "#000000",
            hover: "#E7E7E7",
            danger: "#e31717",
        },
        boxShadow: {
            sm: "0px 5px 5px 0px rgba(0,0,0,0.3)",
            xl: "0px 5px 5px 0px rgba(0,0,0,0.5)",
        },
        fontSize: {
            xs: "13px",
            base: "14px",
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
        },
        maxWidth: {
            300: "300px",
            330: "330px",
            400: "400px",
            1180: "1180px",
            1300: "1300px",
        },
        minWidth: {
            280: "280px",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
