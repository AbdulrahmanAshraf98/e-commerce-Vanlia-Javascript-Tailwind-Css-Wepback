/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				main: { light: "#7367f0", dark: "#283046" },
				dark: "#6e6b7b",
				blackColor: "#625f6e",
				background: { main: "#f8f8f8", dark: "#161d31" },
				overlay: "rgba(0,0,0,.5)",
			},
			boxShadowColor: {
				productCard: {
					main: "rgb(34 41 47 / 10%)",
					dark: "rgb(34 41 47 / 24%)",
				},
				productCardHover: "rgb(34 41 47 / 25%)",
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
