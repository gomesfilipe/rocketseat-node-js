const express = require('express')

const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

// URl fica do seguinte formato: localhost:3000/?variavel1=v1&variavel2=v2
app.route('/').get((req, res) => {
    res.send(req.query)
})

app.route('/about/user').get((req, res) => {
    res.send(req.query)
})
