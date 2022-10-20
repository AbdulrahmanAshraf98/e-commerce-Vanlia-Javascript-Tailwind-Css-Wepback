/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				btn: "#35353f",
				cart: "rgba(0,0,0,.5);",
			},
			animation: {
				fade: "fade 0.5s ease",
			},
			keyframes: {
				fade: {
					"0%": { visibility: "hidden", opacity: 0 },
					"100%": { visibility: "visible", opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
