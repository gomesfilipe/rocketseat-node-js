const express = require('express')
const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

let author = "Filipe"

app.route('/').get((req, res) => res.send(author))

// Rota para editar dados.
app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})
