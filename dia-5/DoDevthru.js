/*
DESAFIO DIA #5:

2 - DoDev thru

1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.

1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 

1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)

1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".
*/

let valor
let quantidade
let opcao = prompt("Qual combustível para abastecimento? \n1 - Gasolina R$5,00 o litro \n2 - Álcool R$3,00 o litro \n3 - Calibrar pneus")
switch (opcao){
    case "1":
        valor = parseInt(prompt("DIgite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de álcool")
        break;
    default:
        console.log("Pneus calibrados com sucesso")
        break;
}


/*
-- RESOLUÇÃO --
//CRIANDO VARIÁVEIS
let valor 
let quantidade
let opcao = prompt("Bem vindo ao DoDev-thru, você deseja:"
"\n1 - abastecer com gasolina; \n2 - abastecer com álcool; \n3 - calibrar os pneus")

//CRIANDO SWITCHCASE
switch (opcao){
    case "1":
        valor = parseInt(prompt("DIgite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de álcool")
        break;
    default:
        console.log("Pneus calibrados com sucesso")
        break;
}
*/

