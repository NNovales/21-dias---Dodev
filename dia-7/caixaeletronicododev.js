/*
DESAFIO DIA #7:
2 - Caixa eletrônico DoDev (DOWHILE)
*Não esqueça de testar seu código!

Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo.
*/

let maiorValorInserido = 0
let totalInserido = 0
let saldoTotal = 1000
let contador = 0
let continuar = 's'
do {
    let nomeCliente = prompt("Qual seu nome? ");
    let cpf = prompt("Digite seu CPF: ");
    let valor = parseFloat(prompt("Digite um valor:"));
    let escolhaSaqDep = prompt("O que deseja fazer? 1 - Saque | 2 - Depósito");

    if (escolhaSaqDep === '1') {
        if (saldoTotal >= valor) {
            saldoTotal -= valor;
            totalInserido += valor; 
            if (valor > maiorValorInserido) {
                maiorValorInserido = valor;
            }
            contador++;
        } else{
            console.log("Valor de saque indisponível.");
        }
    } else if (escolhaSaqDep === '2'){
        saldoTotal += valor;
        totalInserido +=valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        contador ++;
    }
    
    continuar = prompt("Deseja continuar? S/N").toLowerCase();
} while (continuar == 's');

console.log("Seu saldo total é de: " +saldoTotal)
console.log("O maior valor inserido foi de:" +maiorValorInserido)
console.log("A média dos valores inseridos foi de: "+(totalInserido/contador))

/*
let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("digite seu CPF:");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? S / D")

    if (valor < 0){
        console.log("valor inválido. A transação não foi realizada.");
    } else if (operacao == "D" && valor > saldo){
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);  
    } else{
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}.`);
    }
    
    const opcao = prompt("Deseja continuar?(1 para continuar, 2 para parar): ");
    if(opcao === "1"){
        continuar = true
    } else if (opcao === "2"){
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false
    }

} while (continuar)

console.log(`Saldo final: R${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`)
*/
