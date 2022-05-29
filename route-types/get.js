const express = require('express')
const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

app.route('/').get((req, res) => res.send('Hello World!'))
app.route('/about').get((req, res) => res.send('About Hello World!'))
