/*
Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.

- 1 Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela

- 2 Peça para que seu cliente confirme as informações, se ele informar que digitou errado, para para colocar TODAS as informações novamente, repita as perguntas até o usuario informar
que digitou as informações corretamente.

- 3 Faça a previsão do salário dele para os próximos 10 anos considerando que:

    - O cliente recebe anualmente aumento salarial.
    - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior.
    Apresente todos os valores com o ano correspondente. Ex: 2024 - RS$1600 
*/

let repetir;
let salarioAtual;

do {
    let nome = prompt("Informe seu nome: ");
    let idade = parseInt(prompt("Informe sua idade: "));
    salarioAtual = parseFloat(prompt("Qual seu salário atual? "));

    console.log(`Nome: ${nome} \nIdade: ${idade} \nSalário atual: ${salarioAtual}`)
    repetir = prompt("Suas informações estão corretas? 1 -SIM | 2 - NÃO")
    if(repetir == "2"){
        console.log("Por favor preencha os dados novamente...")
    }
} while (repetir == "2");

console.log("Fazendo a previsão do seu salário para 10 anos considerando que: Você recebe aumento anual.\nO aumento será de 1,5% sobre o seu salário atual e a partir do segundo ano\nos aumentos saláriais sempre corresponderam ao dobro do percentual do ano anterior");
let percentualAumento = 1.5 / 100;

for (let ano = 2024; ano <2024 + 10; ano++ ){
    let aumento = salarioAtual * percentualAumento;
    salarioAtual += aumento;
    console.log(`${ano} - R$${salarioAtual.toFixed(2)}`);
    percentualAumento *=2;
}
  


/*
-- RESOLUÇÃO --
//CRIANDO VARIÁVEIS/LOOP
let confirmar = "n"
let salarioAtual;
while (confirmar != "s") {
    let nome = prompt("Digite o seu nome")
    let idade = parseInt(prompt("Digite a sua idade"))
    salarioAtual = parseFloat(prompt("Digite seu salário atual:"))
    console.log("nome:" + nome +", idade: " + idade +", salário atual: "+ salarioAtual)
    confirmar = prompt("As informações estão corretas? (s/n)")
}

//FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano ++){
    salarioAtual += salarioAtual * aumento
    aumento *=2

    console.log((2023 + ano) + " = R$" + salarioAtual)
}
*/
