// setTimeOut(function, delay) obs: delay em ms.

setTimeout(function() {
    console.log('Executes after delay.')
}, 1000) // Executando a função de callback após 1000 ms.

console.log('This print didn\'t wait the end of setTimeOut execution.')
