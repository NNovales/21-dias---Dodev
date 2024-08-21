/*
DESAFIO DIA #5
1 - Calculadora DoDev

1.1 - Crie um algoritmo que peça 2 números ao usuário

1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números

1.3 - Exiba no console a operação feita e o resultado da conta
*/

var n1 = Number(prompt("Digite um número: "));
var n2 = Number(prompt("Digite outro número: "));
console.log("Qual operação matemática será realizada com esses números?");
console.log("1 - SOMA | 2 - SUBTRAÇÃO | 3 - DIVISÃO | 4 - MULTIPLICAÇÃO");

let = matematica = Number(prompt("Número da operação"));

switch(matematica){
    case 1:
        console.log("Resultado da soma" + (n1 + n2));
        break;
    case 2:
        console.log("Resultado da subtração" + (n1 - n2));
        break
    case 3:
        console.log("Resultado da divisão" + (n1 / n2));
        break;
    case 4: 
        console.log("Resultado da multiplicação" + (n1 * n2));
        break;
    default:
        console.log("Opção inválida.");          
        break;
}      

/*
-- RESOLUÇÃO -- 
//CRIANDO VARIÁVEIS
let num1 = parseInt(prompt("Digite o primeiro número"))
let num2 = parseInt(prompt("Digite o segundo número"))
let opcao = parseInt(prompt("Escolha a operação que deseja realizar:
+ "\n1 = +; \n2 = -; \n3 = *; n4 = /"))

//CRIANDO SWITCHCASE
switch (opcao){
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;   
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;    
}
*/