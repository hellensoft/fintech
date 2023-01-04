/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "450px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            "2lg": "1100px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                blackPrimary: "#000008",
                bluePrimary: "#29388d",
                grayText: "#52576a",
                grayText2: "#666666",
                blueTransparent: "#29388dc9",
                greenPrimary: "#09793d",
                greenTrans: "#09793ddd",
                yellowPrimary: "#ffb703",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
