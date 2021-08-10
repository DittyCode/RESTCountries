const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const settings = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: './',
		assetModuleFilename: 'images/[name][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	// optimization: {
	// 	minimize: true,
	// 	minimizer: [new CssMinimizerPlugin()],
	// },
};

module.exports = settings;
