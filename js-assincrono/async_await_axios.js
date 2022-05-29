import axios from 'axios'

async function fetch_repos() {
    try {
        const url = 'https://api.github.com/users/maykbrito'
        const user = await axios.get(url)
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch(err) {
        console.log(err)
    }
}

fetch_repos()
