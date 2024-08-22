/*
=== OBSERVAÇÃO ===
O formato correto para o loop for é for(inicialização; condição; incremento)

DESAFIO DIA #6:
Lista de exercícios
1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
*/
const valorRecebido = parseInt(prompt("Digite um valor: "));

for(let valor = 0; valor <= valorRecebido; valor++){
    console.log(valor);
}

/*
-- RESOLUÇÃO --
//CRIANDO VARIÁVEIS
let numero = parseInt(prompt("Digite um número inteiro e positivo"))

//CRIANDO LOOP FOR
for (let i = 0; i <= 50; i += 5){
    console.log(i)
    }

*/
