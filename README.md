# Webpack + DevServer + Typescript + Mithril + Sass
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
	"scripts": {
		"build": "webpack --config webpack.config.js"
	}
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
	"scripts": {
		"start": "webpack-dev-server --open"
	}
}
```

webpack.config.js
```javascript
module.exports = {
	output: {
		publicPath: `/dist/`
	},
	resolve: {
		extensions: [`.js`, `.ts`]
	}
}
```

## Mithril
https://mithril.js.org/installation.html#npm

`npm install mithril --save`

https://github.com/spacejack/mithril.d.ts

`npm install --save-dev @types/mithril`

tsconfig.json
```json
{
	"compilerOptions": {
		"sourceMap": true,
		"target": "es5",
		"lib": [
			"dom",
			"es2015",
			"es2015.promise"
		]
	}
}
```

## HtmlWebpackPlugin + html-loader
https://github.com/jantimon/html-webpack-plugin

`npm install html-webpack-plugin --save-dev`

https://webpack.js.org/loaders/html-loader/

`npm install --save-dev html-loader`

webpack.config.js
```javascript
const HtmlWebpackPlugin = require(`html-webpack-plugin`)

module.exports = {
	module: {
		rules: [{
			test: /\.html$/,
			loader: `html-loader`
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `src/html/index.html`
		})
	]
}
```

## Sass
### ExtractTextWebpackPlugin
https://webpack.js.org/plugins/extract-text-webpack-plugin/

`npm install --save-dev extract-text-webpack-plugin`

### sass-loader
https://webpack.js.org/loaders/sass-loader/

`npm install sass-loader node-sass css-loader --save-dev`

webpack.config.js
```javascript
const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`)

module.exports = {
	module: {
		rules: [{
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
		}]
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: `styles.css`
		})
	]
}
```

## normalize.css
https://github.com/jantimon/html-webpack-plugin

`npm install --save normalize.css`

styles.scss
```css
@import '~normalize.css';
```

## file-loader & @types/node
https://webpack.js.org/loaders/file-loader/

`npm install --save-dev file-loader`

webpack.config.js
```javascript
module.exports = {
	module: {
		rules: [{
			test: /\.(gif|jpg|png|svg)$/,
			loader: `file-loader?name=assets/[name].[ext]`
		}]
	}
}
```

This package contains type definitions for Node.js

`npm install --save-dev @types/node`

ImageComponent.ts
```javascript
m(`img`, {
	src: require(`../../assets/images/test-image.svg`)
})
```

## svg-inline-loader
https://webpack.js.org/loaders/svg-inline-loader/

`npm install svg-inline-loader --save-dev`

webpack.config.js
```javascript
module.exports = {
	module: {
		rules: [{
			test: /\.(gif|jpg|png|svg)$/,
			loader: `file-loader?name=assets/[name].[ext]`,
			exclude: Path.resolve(__dirname, `./src/assets/icons/`)
		},
		{
			test: /\.svg$/,
			loader: 'svg-inline-loader',
			exclude: Path.resolve(__dirname, `./src/assets/images/`)
		}]
	}
}
```

IconComponent.ts
```javascript
m.trust(require(`../../assets/icons/test-icon.svg`))
```

<!--"Basic HTML5 page": {
	"prefix": "html5",
	"body": [
		"<!DOCTYPE html>",
		"<html lang=\"en\">",
		"",
		"<head>",
		"\t<meta charset=\"utf-8\">",
		"\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">",
		"",
		"\t<title>${1:title}</title>",
		"\t<!--<link rel=\"stylesheet\" href=\"dist/style.css\">",
		"</head>",
		"",
		"<body>",
		"\t<h1>Hello, ${1:title}!</h1>$0",
		"",
		"\t<!--<script src=\"dist/bundle.js\"></script>",
		"</body>",
		"",
		"</html>"
	],
	"description": "Basic HTML5 page"
}-->

<!--"Mithril component": {
	"prefix": "mithril component",
	"body": [
		"import * as m from 'mithril'",
		"import { Component } from 'mithril'",
		"",
		"export declare namespace ${1:ComponentName} {",
		"\tinterface Attrs { }",
		"\tinterface State { }",
		"}",
		"",
		"type Vnode = m.Vnode<${1:ComponentName}.Attrs, ${1:ComponentName}.State>",
		"type VnodeDOM = m.VnodeDOM<${1:ComponentName}.Attrs, ${1:ComponentName}.State>",
		"",
		"export const ${1:ComponentName}: Component<${1:ComponentName}.Attrs, ${1:ComponentName}.State> = {",
		"",
		"\t// oninit(vnode) { },",
		"",
		"\tview(vnode) {",
		"\t\treturn (",
		"\t\t\tm(`div`,",
		"\t\t\t\t`${1:ComponentName}`",
		"\t\t\t)",
		"\t\t)",
		"\t},",
		"",
		"\t// oncreate(vnode) { },",
		"\t// onbeforeupdate(vnode, old) { },",
		"\t// onupdate(vnode) { },",
		"\t// onbeforeremove(vnode) { },",
		"\t// onremove(vnode) { }",
		"}"
	],
	"description": "Mithril component"
}-->