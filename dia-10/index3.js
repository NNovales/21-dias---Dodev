/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário
*/

let numeros = [];
posicaoNumero = 0;
let qtdnumeros = Number(prompt("Quantos números você deseja inserir? "));

for (posicaoNumero = 0; posicaoNumero < qtdnumeros; posicaoNumero++){
    let numeroInserido =Number(prompt("Insira um número: "))
    numeros[posicaoNumero] = numeroInserido
}

console.log(numeros);
numeros.reverse();
console.log(numeros);