/*
Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, popule um array
com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores)
Na hora de somar com os termos anteriores, some com elementos anteriores do array.
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido -1)
*/

let numero = []
let numeroInserido = parseInt(prompt("Digite um número inteiro positivo: "))

function fibonacci(n) {
    let fib = [0, 1]; //inicia com os dois primeiros números de fibonacci
}

for (let i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[i- 2];
}

return fib;

let n = 10;
console.log(fibonacci(n));





