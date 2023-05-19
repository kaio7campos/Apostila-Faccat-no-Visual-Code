// 44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA) 
// 47) Acrescentar  uma  mensagem  de 'VALOR  INVÁLIDO'  no  exercício  [45]  caso  o  segundo  valor informado seja ZERO. 


// enquanto
function mobile() {
    let valor1 = parseFloat(prompt("Digite um valor"));
    let valor2 = parseFloat(prompt("Digite um segundo valor"));
    while (valor2 == 0) {
        valor2 = prompt("Digite um valor diferente de zero");
    }
    alert("O resultado da divisão é: " + `${valor1 / valor2}`);
}


// repita ate
function debil() {
    let valor1 = parseFloat(prompt("Digite um valor"));
    let valor2 
    do {
        valor2 = parseFloat(prompt("Digite um segundo valor"))
        if (valor2 == 0)
        alert("Digite um valor diferente de zero")
    } while (valor2 == 0)
    alert("O resultado da divisão é: " + `${valor1 / valor2}`);
}

// chat GPT

function chat() {
    let valor1, valor2;

do {
  valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  valor2 = parseFloat(prompt("Digite o segundo valor:"));
} while (valor2 === 0);

let resultado = valor1 / valor2;

console.log("O resultado da divisão é: " + resultado);
}