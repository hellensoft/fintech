/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bluePrimary: "#29388d",
				blueTransparent: "#29388dc9",
                greenPrimary: "#09793d",
                yellowPrimary: "#ffb703"
			},
		},
	},
	plugins: [],
};
