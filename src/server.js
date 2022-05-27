const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.use(express.static('public'))
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))
server.use(route)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log('Listening on port ' + PORT))
