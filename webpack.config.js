var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "development",
	// mode: "production",
	entry: './js/index.js',

	output: {
		path: path.resolve(__dirname, "./bin/dist"),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	]
};