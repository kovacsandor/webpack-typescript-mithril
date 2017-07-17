const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`)
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const Path = require(`path`)

module.exports = {
	devtool: `inline-source-map`,
	entry: `./index.js`,
	module: {
		rules: [
			{
				test: /\.(gif|jpg|png|svg)$/,
				loader: `file-loader?name=assets/[name].[ext]`,
				exclude: Path.resolve(__dirname, `./src/assets/icons/`)
			},
			{
				test: /\.html$/,
				loader: `html-loader`
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
						{
							loader: `css-loader`
						},
						{
							loader: `sass-loader`
						}
					]
				})
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader',
				exclude: Path.resolve(__dirname, `./src/assets/images/`)
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
			favicon: `src/assets/images/favicon.ico`,
			template: `src/html/index.html`
		})
	],
	resolve: {
		extensions: [`.js`, `.ts`]
	}
}