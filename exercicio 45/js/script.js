// 44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA)
// .45) Reescreva o exercício anterior utilizando a estrutura ENQUANTO. 
function treta() {
    let valor1 = parseInt(prompt("Digite um valor "));
    let valor2 = parseInt(prompt("Digite um segundo valor"));
    while (valor2 == 0) {
        valor2 = parseInt(prompt("O segundo valor não pode ser zero"));
    }
    alert("O resultado da divisão é: " + `${valor1 / valor2} `) 
}