combustivel = Number(prompt("Qual combustível para abastecimento? 1 - gasolina R$5,00| 2 - álcool R$3,00| 3 - calibrar pneus"))
if(combustivel == 1){
    litrosgasolina = Number(prompt("Qual valor desejado? R$5,00litro:"))
}

if(combustivel == 2){
    litrosalcool = Number(prompt("Qual valor desejado? R$3,00litro:"))

} else {
    console.log("pneus calibrados com sucesso")
}

switch(combustivel){
    case 1: 
        console.log(`Você abasteceu ${litrosgasolina/5} litros`)
        break;
    case 2:
        console.log(`Você abasteceu ${litrosalcool/3} litros`)
}

