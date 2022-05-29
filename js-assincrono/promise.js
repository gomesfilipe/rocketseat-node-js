/*
    Status promise: Pending, Fulfilled, Rejected, Settled
*/

let accept = true

console.log('Call uber')

const promise = new Promise((resolve, reject) => {
    if(accept) {
        return resolve('Trip accepted!')
    } else {
        return reject('Trip rejected!')
    }
})

promise
    .then(result => {console.log(result)})
    .catch(err => {console.log(err)})
    .finally(() => {console.log('Promise finished.')})
