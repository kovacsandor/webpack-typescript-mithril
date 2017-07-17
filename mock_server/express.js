<<<<<<< HEAD
const express = require(`express`)
const server = express()
let posts = require(`./data/posts.json`)
let users = require(`./data/users.json`)

server.use((req, res) => {
	
	res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:8080`)
	res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, PATCH, DELETE, OPTIONS`)
	res.setHeader(`Access-Control-Allow-Headers`, `X-Requested-With, content-type`)
	res.setHeader(`Access-Control-Allow-Credentials`, true)

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
			response = filterData(req, users)
			break
		default:
			response = `Invalid request path: ${req.path}`
			break
	}

	setTimeout(() => res.send(response), 1000)
})

server.listen(3000, function () {
	console.log(`Mock server listening on port 3000!`)
})

function filterData(request, data) {
	let filtered = []
	for (let property in request.query) filtered = filtered.concat(data.filter(item => item[property] == request.query[property]))
	return filtered.length > 0 ? filtered : data
=======
const express = require(`express`)
const server = express()
let posts = require(`./data/posts.json`)
let users = require(`./data/users.json`)

server.use((req, res) => {
	
	res.setHeader(`Access-Control-Allow-Origin`, `http://localhost:8080`)
	res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, PATCH, DELETE, OPTIONS`)
	res.setHeader(`Access-Control-Allow-Headers`, `X-Requested-With, content-type`)
	res.setHeader(`Access-Control-Allow-Credentials`, true)

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
			response = filterData(req, users)
			break
		default:
			response = `Invalid request path: ${req.path}`
			break
	}

	setTimeout(() => res.send(response), 1000)
})

server.listen(3000, function () {
	console.log(`Mock server listening on port 3000!`)
})

function filterData(request, data) {
	let filtered = []
	for (let property in request.query) filtered = filtered.concat(data.filter(item => item[property] == request.query[property]))
	return filtered.length > 0 ? filtered : data
>>>>>>> e5e0c244534734b89f33aaf1f93ecc51161d5fef
}