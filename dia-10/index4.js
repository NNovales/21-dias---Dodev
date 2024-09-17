/*
Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, popule um array
com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores)
Na hora de somar com os termos anteriores, some com elementos anteriores do array.
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido -1)
*/

let numero = parseInt(prompt("Digite um número inteiro e positivo"))
let fibonacci = []
fibonacci[0] = numero - 1
fibonacci[1] = numero

//CRIANDO LOOP
for (let i = 2; i <10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Fibonacci: " + fibonacci)
