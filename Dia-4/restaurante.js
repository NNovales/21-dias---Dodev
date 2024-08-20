// Variaveis 


let fome = prompt("Você está com fome?: Digite 1 para Sim e 2 para não")
let dinheiro = prompt("Você tem dinheiro?: Digite 1 para Sim e 2 para não")
let restaurante = prompt("O restaurante está aberto?: Digite 1 para Sim e 2 para não")

if(fome == 2 || dinheiro == 2){
    console.log("Hoje a janta será em casa")
}
else if(fome == 1 && dinheiro == 1 && restaurante == 2){
    console.log("Peça um delivery")
}
else if(fome == 1 && dinheiro == 1 && restaurante == 1 ){
    console.log("Hoje o jantar será no seu restaurante preferido")
}
