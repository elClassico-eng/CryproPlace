/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Manrope", "sans-serif"],
        },
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.slate,
            green: colors.emerald,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
            cyan: colors.cyan,
            blue: colors.blue,
            violet: colors.violet,
            fuchsia: colors.fuchsia,
            slate: colors.slate,
            stone: colors.stone,
            textColor: "#17252A",
            bgPrimary: "#fff",
            bgSecondary: "#2B7A78",
            pink: "#0071bd",
            lightBlue: "#e6f7ff",
            border: "#d9d9d9",
            bgColor: "#e2e7d3",
            bgColorNavbar: "#3e3e3e",
            bgColorNavbarBlack: "#222",
        },
    },
    plugins: [],
};
