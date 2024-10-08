/*
=== OBSERVAÇÃO ===
O formato correto para o loop for é for(inicialização; condição; incremento)

DESAFIO DIA #6:
Lista de exercícios
Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
Ex: Números de entrada:3
       Saída:  Número 3:      Número 4:         Número 5:       

               3 x 1 = 3      4 x 1 = 4         5 x 1 = 5

               3 x 2 = 6      4 x 2 = 8         5 x 2 = 10

               3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          

               3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         
*/

let numRecebido = parseInt(prompt("Digite um número: "));
for(let numero = numRecebido; numero <= numRecebido + 2; numero++){
    console.log("tabuada do número: " +numero)
    for(let j= 0; j <=10; j++){
        console.log(numero + "X" + j + " = " + (numero* j))
    }
}



/* -- RESOLUÇÃO --
//CRIANDO VARIÁVEIS
let numero = parseInt(prompt("Digite um número inteiro e positivo"))
for (let i = numero; i <= numero + 2; i++){
    console.log("tabuada do número: " +i)
    for(let j= 0; j <=10; j++){
        console.log(i + "X" + j + " = " + (i * j))
    }
}
*/