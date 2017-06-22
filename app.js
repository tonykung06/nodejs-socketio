const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const port = 8080

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
	console.log('new connection is made')
	socket.on('message-from-client', msg => {
		console.log(msg)
	})
	socket.emit('message-from-server', {
		greeting: 'hello world from server'
	})
})

server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})