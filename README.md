# Webpack + DevServer + Typescript + Mithril
## Webpack
https://webpack.js.org/guides/get-started/

`mkdir webpack-demo && cd webpack-demo`

`npm init -y`

`npm install --save-dev webpack`

webpack.config.js
```javascript
let path = require(`path`)

module.exports = {
	entry: `./app/index.js`,
	output: {
		filename: `bundle.js`,
		path: path.resolve(__dirname, `dist`)
	}
}
```

package.json
```json
{
	...
	"scripts": {
		"build": "webpack --config webpack.config.js"
	},
	...
}
```

index.html
```html
...
	<script src="dist/bundle.js"></script>
</body>
...
```

## Typescript
https://webpack.js.org/guides/typescript/

`npm install --save-dev typescript ts-loader`

tsconfig.json
```json
{
	"compilerOptions": {
		"sourceMap": true,
		"target": "es5"
	}
}
```

webpack.config.js
```javascript
let path = require(`path`)

module.exports = {
	devtool: `inline-source-map`,
	entry: `./app/main.ts`,
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
		path: path.resolve(__dirname, `dist`)
	},
	resolve: {
		extensions: [`.ts`]
	}
}
```

## DevServer
https://webpack.js.org/guides/development/

`npm install --save-dev webpack-dev-server`

package.json
```json
{
	...
	"scripts": {
		"start": "webpack-dev-server --open"
	},
	...
}
```

webpack.config.js
```javascript
...
output: {
	...
	publicPath: `/dist/`
},
resolve: {
	extensions: [`.js`, `.ts`]
}
...
```