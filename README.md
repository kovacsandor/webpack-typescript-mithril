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

## Mithril
https://mithril.js.org/installation.html#npm

`npm install mithril --save`

https://github.com/spacejack/mithril.d.ts

`npm install --save-dev @types/mithril`

tsconfig.json
```json
...
"target": "es5",
"lib": [
	"dom",
	"es2015",
	"es2015.promise"
]
...
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
		"export interface Attrs { }",
		"interface State { }",
		"",
		"type Vnode = m.Vnode<Attrs, State>",
		"type VnodeDOM = m.VnodeDOM<Attrs, State>",
		"",
		"export let ${1:ComponentName}: Component<Attrs, State> = {",
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