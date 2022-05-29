let control = true

const promise = new Promise((resolve, reject) => {
    if(control) {
        return resolve('ok')
    } else {
        return reject('error')
    }
    
})

async function start() {
    try {
        const result = await promise
        console.log(result)
    } catch(err) {
        console.log(err)
    } finally {
        console.log('Always executed!')
    }
}

start()
