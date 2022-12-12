const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/app/**/*.{ts,html}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
            trebuchet: ["Trebuchet MS"],
            jb: ["JetBrains Mono"]
        },
        screens: {
            wide: "710px",
            ...defaultTheme.screens,
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
