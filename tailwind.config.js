/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				btn: "#35353f",
				cart: "rgba(0,0,0,.5);",
			},
		},
	},
	plugins: [],
};
