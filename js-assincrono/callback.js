function print_data(data) {
    console.log(data)
}

function print_data_2(data) {
    console.log('another tasks')
    console.log(data())
}

print_data(1) // Number
print_data('string') // String
print_data(true) // Boolean
print_data({name: 'fulano'}) // Object
print_data([10, 'text', true]) // Array
print_data_2(function() { // Callback
    return 'Hello World!'
})