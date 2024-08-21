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