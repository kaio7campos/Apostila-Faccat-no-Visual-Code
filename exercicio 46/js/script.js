// 44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
// 46) Acrescentar  uma  mensagem  de 'VALOR  INVÁLIDO'  no  exercício  [44]  caso  o  segundo  valor informado seja ZERO. 
function bmw() {
    let valor1 = parseFloat(prompt("Digite um valor"));
    let valor2 = parseFloat(prompt("Digite um segundo valor"));
    while (valor2 == 0) {
        valor2 = prompt("Digite um valor diferente de zero !")
    }
    alert("O resultado da divisão é: " + `${valor1 / valor2}`)
}