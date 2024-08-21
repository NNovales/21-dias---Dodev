/*
DESAFIO DIA #3:

Conhecendo o usuário

1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. 

2 - Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, desconsidere o mês) e o IMC do usuário.

   *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 

    IMC = peso / (altura x altura)

3 - Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá giovanni, você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" 
*/

let nomeUsuario = prompt('Nome: ')
let idadeUsuario = parseInt(prompt('Idade: '))
let alturaUsuario = parseFloat(prompt('Altura:'))
let pesoUsuario = parseInt(prompt('Peso: '))

let anoNascimento = (2023 - idadeUsuario)
const imc = (pesoUsuario / (alturaUsuario * alturaUsuario))

console.log("Olá" + nomeUsuario + ", você tem" + idadeUsuario + "anos, nasceu em" + anoNascimento + ",tem " + alturaUsuario + " de altura, pesa" + pesoUsuario + "kg e seu IMC é" + imc + "kg/m2" ) 


/* -- RESOLUÇÃO --
//DECLARAÇÃO DE VARIAVEIS

let nome = ""
let idade = 0
let altura = 0
let peso = 0 

//Solicitando informacao ao usuario e atribuindo os valores as variaveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("DIgite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

//calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//exibindo informacoes no console
console.log("Olá " + nome + ", você tem" + idade + "anos, nasceu em " + anoNasc + ",tem" + altura + " de altura, pesa" + peso + "kg e seu IMC é " + imc + "kg/m2" )
*/