module.exports = {
    content: ["./src/app/**/*.{ts,html}"],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
            trebuchet: ["Trebuchet MS"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
