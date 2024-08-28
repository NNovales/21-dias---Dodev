/*
Conhecendo seu usuário

- Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: 
Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83m de altura e pesa 74kg.

- Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela "Está liberado para tomar umas geladas", se ele for menor exiba "Sem gelada para você".

*/
let continuar;
do {
    let nome = prompt("Insira o seu nome: ")
    let idade = Number(prompt("Insira sua idade: "))
    let peso = Number(prompt("Insira seu peso: "))
    let altura = Number(prompt("Insira sua altura: "))
    let profissao = prompt("Insira sua profissão: ")

    const {meses, semanas, dias} = converterIdade(idade)
    const {imc, anoNascimento} = imcEanoNascimento(altura, peso, idade)
    
    
    if (idade > 18){
        console.log(`Olá ${nome} você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`)
        console.log("Está liberado para tomar umas geladas")
    }else{
        console.log(`Sem gelada para você ${nome},`)
    };

console.log(`De acordo com a idade informada, você tem ${meses} meses, ${semanas} semanas e ${dias} dias.`)
console.log(`E de acordo com seu peso e altura informados você tem o IMC ${imc.toFixed(2)}kg/m2`)
if (imc < 18.5) {
    console.log("Seu IMC indica Magreza pois está menor que 18,5kg/m²");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu IMC indica Normal pois está entre 18,5kg/m² e 24,9kg/m²");
} else if (imc >= 24.9 && imc < 30) {
    console.log("Seu IMC indica sobrepeso pois está entre 24,9kg/m² e 30kg/m²");
} else if (imc >= 30) {
    console.log("Seu IMC indica obesidade pois está acima de 30kg/m²");
} else {
    console.log("Valor de IMC inválido");
}


console.log(`Sabendo que você tem ${idade} e estamos em 2023, você nasceu em ${anoNascimento}`)
exibirAnosVividos(anoNascimento);
continuar = prompt("Deseja continuar? 1 - Sim | 2 - Não");
    
  
} while (continuar ==="1");


/*
Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias.
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias.
*/

function converterIdade(idade){
        const diasPorAno = 365;
        const diasPorMes = 30;
        const diasPorSemana = 7;

        const totalDias = idade * diasPorAno;
        const totalMeses = Math.floor(totalDias/diasPorMes);
        const totalSemanas = Math.floor(totalDias/ diasPorSemana);

        return {
            meses: totalMeses,
            semanas: totalSemanas,
            dias: totalDias
        };
    };        

/*
 - Calcule o IMC do seu usuário e informe a faixa dele.
 
 * O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso/(altura x altura)
 O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é 
 possível verificar em que faixa o IMC se entroca, podendo indicar:
  - Magreza, quando o resultado é menor que 18,5 kg/m2;
  - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
  - Sobrepeso, quando o resultado está entre 24,9 e 30kg/m2;
  - Obesidade, quando o resultado é maior que 30kg/m2;

  * A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).
*/        

function imcEanoNascimento(altura, peso, idade){
    const imc = peso / (altura * altura);
    const anoNascimento = 2023 - idade
    
    return {
        imc: imc,
        anoNascimento: anoNascimento
    }

};

/*
 - Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.

 *ATENÇÃO: Aqui você deve utilizar o loop FOR.
 Ex: nasceu em 2018 você deve exibir: 
 2018 - 0 anos de idade
 2019 - 1 anos de idade
 2020 - 2 anos de idade
 2021 - 3 anos de idade
 2022 - 4 anos de idade

 - Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa
*/

function exibirAnosVividos(anoNascimento) {
    
    for(let ano = anoNascimento; ano <= 2023; ano++) {
        let idade = ano - anoNascimento;
        console.log(`${ano} - ${idade} anos de idade`);
    };
};
   
