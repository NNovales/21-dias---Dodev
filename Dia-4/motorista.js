let nome = prompt("Qual seu nome?: ")
let idade = prompt("Qual a sua idade?: ")
let carta = prompt("Você tem Carteira de motorista?: Digite 1 para Sim e 2 para não ")
let carro = prompt("Possui algum veículo?: Digite 1 para Sim e 2 para não ")

if(idade < 18 || carta == 2 ){
    console.log(` ${nome}, você não pode dirigir`)
}
else if(idade >= 18 && carta == 1 && carro != 1){
    console.log(`${nome}, você pode dirigir mas não tem um carro`)
}
else if(idade >= 18 && carta == 1 && carro == 1){
    console.log(`${nome}, você será o motorista!`)
}

