const express = require('express')
const app = express()

const door = '3000'
app.listen(door)

// Middleware.
app.use(express.json())
