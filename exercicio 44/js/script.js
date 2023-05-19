// 44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
function get() {
    let valor1, valor2; 
    do {
         valor1 = parseInt(prompt("Digite um valor"));
         valor2 = parseInt(prompt("Digite um segundo valor"));
        
    } while (valor2 == 0);
    let divisao = valor1 / valor2
    alert("O resultado da divisão é " + divisao);
}
// não declarar variaveis dentro da estrutura Do While
// estrutura Repita até