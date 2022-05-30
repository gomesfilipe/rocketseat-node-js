const express = require('express')
const axios = require('axios')

const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())

app.route('/').get((req, res) => {
    const url = 'https://api.github.com/users/gomesfilipe'
    axios.get(url)
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(err => console.log(err))
})
