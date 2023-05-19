// 65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor lido.     

let valor1 = parseInt(prompt("Digite um valor: "));
let valor2 = parseInt(prompt("Digite um segundo valor"));
let soma = 0
for (let i = valor1; i <= valor2; i++) {
     soma += i
}

console.log(`A soma dos valores inteiros entre ${valor1} e ${valor2} é ${soma}`);