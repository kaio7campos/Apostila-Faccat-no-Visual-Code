// 61) Ler 10 valores, calcular e escrever a média aritmética desses valores lidos. 
let soma = 0
for(let i = 1; i <= 10; i++) {
    let valor = parseFloat(prompt("Digite um numero " + i))
    soma += valor
}
let media = soma / 10
console.log("Sua media foi de: " + media)