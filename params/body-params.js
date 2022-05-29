const express = require('express')
const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

// Essa passagem também funciona para rotas put e patch.
app.route('/').post((req, res) => {
    const {name, city, hobbies} = req.body // Quebrando o json.
    res.send(`Your name is ${name}, you live in ${city} and your hobbies are ${hobbies}`)
})
