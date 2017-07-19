const express = require(`express`)
const server = express()
const bodyParser = require('body-parser')

let posts = require(`./data/posts.json`)
let users = require(`./data/users.json`)

const allowedAccessOrigin = `http://localhost:8080`
const port = 3000

server.use(bodyParser.json())
server.use((req, res) => {

	res.header(`Access-Control-Allow-Credentials`, true)
	res.header(`Access-Control-Allow-Headers`, `Content-Type`)
	res.header(`Access-Control-Allow-Methods`, `GET, POST`)
	res.header(`Access-Control-Allow-Origin`, allowedAccessOrigin)

	let response
	switch (req.path) {
		case `/`:
			response = {
				posts: posts,
				users: users
			}
			break
		case `/posts`:
			response = filterData(req, posts)
			break
		case `/users`:
			if (req.method == `GET`) response = filterData(req, users)
			if (req.body.kind == 0) {
				users.push(req.body.user)
				response = { message: `User created.` }
			}
			if (req.body.kind == 1) {
				response = { message: `User deleted.` }
				users.pop()
			}
			break
		default:
			response = `Invalid request path: ${req.path}`
			break
	}

	setTimeout(() => res.send(response), 1000)
})

server.listen(port, function () {
	console.log(`Mock server listening on port ${port}!`)
})

function filterData(request, data) {
	let filtered = []
	for (let property in request.query) filtered = filtered.concat(data.filter(item => item[property] == request.query[property]))
	return filtered.length > 0 ? filtered : data
}