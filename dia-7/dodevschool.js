/*
Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
*Não esqueça de testar seu código!
*/

let totalNotas = 0;
let qtdHomens = 0;
let mulheres7mais = 0;
let maiorNotaHomens = 0;
let contador = 0
do {
    nota = parseFloat(prompt("Qual a sua nota: "))
    sexo = prompt("Qual o seu sexo? M/F".toLowerCase())
    outraNota = parseInt(prompt("Deseja enviar outra nota?: "))
    if(sexo === 'm'){
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }    
            qtdHomens++
        }

            if(sexo =="f" && nota > 7){
                mulheres7mais++
            }
        totalNotas += nota  
        contador++ 
    }while(outraNota != 2)
     

totalNotas = totalNotas / contador    

console.log("A média geral dos alunos foi", totalNotas )
console.log(qtdHomens, "Homens enviaram suas notas")
console.log(mulheres7mais, "Mulheres Tiveram nota acima de 7")
console.log(maiorNotaHomens, "Foi a maior nota entre os homens")

/*
//CRIANDO VARIÁVEIS
let mediageral = 0
let qtdHomens
let qtdMulheresAcimaDe7
let maiorNotaHomens
let contador = 1

//nota, sexo

while(contador <= 10){
    nota = parseInt(prompt("Digite a nota do "+ contador + " aluno"))
    sexo = prompt("Digite o sexo do aluno (m/f)")
    
    if (sexo == m){
        if(nota > maiorNotaHomens){
        maior nota homens = nota
        }
        qtdHomens++ 
    }
    
    if (sexo == "f" && nota > 7){
        qtdMulheresAcimaDe7++
    }

    mediageral += nota
    contador ++
}

mediageral = mediageral / 10

console.log("A média geral dos alunos foi: + mediageral")
console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulheresAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)
*/