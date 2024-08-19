let nomeUsuario = prompt('Nome: ')
let idadeUsuario = parseInt(prompt('Idade: '))
let alturaUsuario = parseFloat(prompt('Altura:'))
let pesoUsuario = parseInt(prompt('Peso: '))

let anoNascimento = (2023 - idadeUsuario)
const imc = (pesoUsuario / (alturaUsuario * alturaUsuario))

console.log("Olá" + nomeUsuario + ", você tem" + idadeUsuario + "anos, nasceu em" + anoNascimento + ",tem " + alturaUsuario + " de altura, pesa" + pesoUsuario + "kg e seu IMC é" + imc + "kg/m2" ) 

