# Webpack + DevServer + Typescript + Mithril
## Webpack
https://webpack.js.org/guides/get-started/

`mkdir webpack-demo && cd webpack-demo`

`npm init -y`

`npm install --save-dev webpack`

index.html
```html
...
	<script src="dist/bundle.js"></script>
</body>
...
```

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