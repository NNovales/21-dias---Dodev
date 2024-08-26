/*
Uma função é um bloco de código reutilizável que realiza uma tarefa específica.

Ela pode receber dados, chamados de parãmetros, executar ações com esses dados e, opcionalmente, retornar um resultado.

As funções são úteis para organizar e reutilizar código, tornando o programa mais modular e fácil de entender.
*/

function NomeDaFuncao(parametro1, parametro2){
    console.log(parametro1) // Código que realiza uma tarefa
    let resultado = parametro2 + 2
    return resultado; // Opcional: retorna um resultado
}

// Chamando a função com argumentos
let resultado = NomeDaFuncao(valor1, valor2)
