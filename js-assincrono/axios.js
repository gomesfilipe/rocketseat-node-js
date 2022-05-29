import axios from 'axios'

// Encadeando promises dependentes.
axios
    .get('https://api.github.com/users/maykbrito')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(err => console.log(err))

Promise.all([
    axios.get('https://api.github.com/users/maykbrito'),
    axios.get('https://api.github.com/users/maykbrito/repos')
])
.then(responses => { // Depois do fim das suas requisições.
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch(err => console.log(err.message))
