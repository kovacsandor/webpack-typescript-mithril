const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const Path = require(`path`)

module.exports = {
	devtool: `inline-source-map`,
	entry: `./src/index.js`,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{
							loader: "css-loader"
						},
						{
							loader: "sass-loader"
						}
					]
				})
			},
			{
				test: /\.html$/,
				loader: `html-loader`
			},
			{
				test: /\.ts$/,
				loader: `ts-loader`,
				exclude: /node_modules/
			}
		]
	},
	output: {
		filename: `bundle.js`,
		path: Path.resolve(__dirname, `dist`)
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: `styles.css`
		}),
		new HtmlWebpackPlugin({
			template: `src/html/index.html`
		})
	],
	resolve: {
		extensions: [`.js`, `.ts`]
	}
}