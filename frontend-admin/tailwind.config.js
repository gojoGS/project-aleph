/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    safelist: [
        {
            pattern: /alert.*/,
        },
        {
            pattern: /mockup-code/,
        },
    ],
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
    daisyui: {
        themes: ["fantasy", "dark"],
    },
};
