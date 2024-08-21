/*
DESAFIO DIA #4:

1 - Jantar especial?

1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

1.2 - Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"

1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"

1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"
*/

let fome = prompt("Você está com fome?: Digite 1 para Sim e 2 para não")
let dinheiro = prompt("Você tem dinheiro?: Digite 1 para Sim e 2 para não")
let restaurante = prompt("O restaurante está aberto?: Digite 1 para Sim e 2 para não")

if(fome == 2 || dinheiro == 2){
    console.log("Hoje a janta será em casa")
}
else if(dinheiro == 1 && restaurante == 1){
    console.log("Hoje o jantar será no seu restaurante preferido")
}
else {
    console.log("Peça um delivery")
}

/*
-- RESOLUÇÃO --
const temFome = prompt("você está com fome? (sim/não)")
const temDinheiro = prompt("você tem dinheiro? (sim/não)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)")

if (temFome === "nao" || temDinheiro == "nao"){
    console.log ("Hoje a janta será em casa");
} else if (temDinheiro === "sim" && restauranteAberto === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!");
} else {
    console.log("Peça um delivery"):
}
*/