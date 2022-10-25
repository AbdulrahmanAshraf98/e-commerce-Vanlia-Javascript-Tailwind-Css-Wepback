// html
// css
// js babel
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPluginOptions = {
	template: path.resolve(__dirname, "./src/index.html"),
};
module.exports = {
	entry: ["./src/js//controller.js"],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.svg$/,
				loader: "svg-inline-loader",
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},

	plugins: [new HtmlWebpackPlugin(htmlPluginOptions)],

	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		watchFiles: ["./src/*"],
		compress: true,
		port: 9000,
		open: true,
		hot: true,
	},
};
