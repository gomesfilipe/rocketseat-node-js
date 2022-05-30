const url = 'http://localhost:5500/api'

function get_users() {
    fetch(url)
        .then(response => response.json())
        .then(data => document.getElementById('renderApiResult').textContent = JSON.stringify(data))
        .catch(err => console.log(err))
}   

function get_user(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('userName').textContent = data.name
            document.getElementById('userCity').textContent = data.city
            document.getElementById('userAvatar').src = data.avatar
        })
        .catch(err => console.log(err))
}

function add_user(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => document.getElementById('alertApi').textContent = data)
        .catch(err => console.log(err))
}       

function update_user(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => document.getElementById('alertApi').textContent = data)
        .catch(err => console.log(err))
}

function delete_user(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => document.getElementById('alertApi').textContent = data)
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
let delete_id = 5
// update_user(updatedUser, id)
// add_user(newUser)
// delete_user(delete_id)
get_users()
get_user(id)