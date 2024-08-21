/*
DESAFIO DIA #4:

2 - Motorista

1.1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, se possuí carta de motorista e se tem algum carro.

1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".

1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".

1.4 - Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"
*/

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

/*
-- RESOLUÇÃO --
let nome 
let idade
let temCarta = false
let temCarro = false

//PEDINDO INFORMAÇÕES AO USUÁRIO
nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == "s") {
    temCarta = true
}
let opcaoCarro = prompt("Você tem carro? (s/n)")
    if (opcaoCarro == "s"){
 temCarro == true
}

//EXIBINDO MENSAGEM NO CONSOLE
if (idade < 18 || !temCarta) {
    console.log(nome +", você não pode dirigir")
} else if (idade >= 18 && temCarta && !temCarro){
  console.log(nome +", você pode dirigir mas não tem um carro")
} else{
  console.log(nome +", você será o motorista!")
}
*/
