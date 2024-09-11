/*
Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. Modifique os elementos do array de modo que a sequência de números
fique ao contrário

Ex: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2, 1
*/

let numeros = [];
posicaoNumero = 0;

for (posicaoNumero = 0; posicaoNumero < 5; posicaoNumero++){
    let numeroInserido = Number(prompt("Digite um número: "))
    numeros[posicaoNumero] = numeroInserido
}
console.log(numeros[4], numeros[3], numeros[2], numeros[1], numeros[0])