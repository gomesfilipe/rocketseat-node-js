import fetch from 'node-fetch'

async function start() {
    try {
        const url = 'https://api.github.com/users/maykbrito'
        const response = await fetch(url)
        const user = await response.json()
        const repos_response = await fetch(user.repos_url)
        const repos_user = await repos_response.json()
        console.log(repos_user.length)

    } catch(err) {
        console.log(err)
    }
}

start()
