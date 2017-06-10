let path = require(`path`)

module.exports = {
	devtool: `inline-source-map`,
	entry: `./src/typescript/Main.ts`,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: `ts-loader`,
				exclude: /node_modules/,
			}
		]
	},
	output: {
		filename: `bundle.js`,
		path: path.resolve(__dirname, `dist`),
		publicPath: `/dist/`
	},
	resolve: {
		extensions: [`.js`, `.ts`]
	}
}