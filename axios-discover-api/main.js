// import axios from 'axios'

const url = "http://localhost:5500/api"

function get_users() {
    axios.get(url)
        .then(response => {
            document.getElementById('apiResult').textContent = JSON.stringify(response.data)
        })
        .catch(err => console.log(err))
}

function get_user(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            document.getElementById('userName').textContent = response.data.name
            document.getElementById('userCity').textContent = response.data.city
            document.getElementById('userAvatar').src = response.data.avatar
        })
        .catch(err => console.log(err))
}

function add_user(newUser) {
    axios.post(url, newUser)
        .then(response => {
            document.getElementById('alertApi').textContent = response.data
        })
        .catch(err => console.log(err))
}

function update_user(id, updatedUser) {
    axios.put(`${url}/${id}`, updatedUser)
        .then(response => {
            document.getElementById('alertApi').textContent = response.data
        })
        .catch(err => console.log(err))
}

function delete_user(id) {
    axios.delete(`${url}/${id}`)
        .then(response => {
            console.log(response.data)
            document.getElementById('alertApi').textContent = response.data
        })
        .catch(err => console.log(err))
}

const newUser = {
    name: "Fulano Silva",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}

const updatedUser = {
    name: "Beltrano Costa Tavares",
    avatar: "https://picsum.photos/200/300",
    city: "Salvador"
}

let id = 1
let delete_id = 4

get_users()
get_user(id)
// add_user(newUser)
// update_user(id, updatedUser)
// delete_user(delete_id)
