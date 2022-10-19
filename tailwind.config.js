/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				blackPrimary: "#000008",
				bluePrimary: "#29388d",
                grayText: "#52576a",
				blueTransparent: "#29388dc9",
                greenPrimary: "#09793d",
                yellowPrimary: "#ffb703"
			},
		},
	},
	plugins: [],
};
