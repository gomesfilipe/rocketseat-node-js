const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
    console.log(res.statusCode) // Se retornar 200 significa sucesso.
})

console.log('Connecting API') // Executa primeiro pois o callback é assíncrono.
