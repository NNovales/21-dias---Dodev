/*
Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final exiba os índices em que número
inserido aparece nesse array. Para testes do exercício use até 10 elementos no array.
*/

let numeroInteiro = [];
let posicaoNumero = 0;


// O primeiro for coleta 10 números do usuário e os armazena no array numeroInteiro
for (posicaoNumero = 0; posicaoNumero < 10; posicaoNumero++){
    let numeroInserido = parseInt(prompt("Digite um número: "));
    numeroInteiro[posicaoNumero] = numeroInserido;
}

// O segundo for é usado para percorrer o array numeroInteiro e imprimir tanto os índices quanto os valores correspondentes
for (posicaoNumero = 0; posicaoNumero < numeroInteiro.length; posicaoNumero++){
    console.log(`ìndice: ${posicaoNumero}, Número: ${numeroInteiro[posicaoNumero]}`);
}


