const express = require('express')
const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

// Rota para deletar dados.
app.route('/:id').delete((req, res) => {
    res.send(req.params)
})
