// 72) Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever: - o maior preço lido - a média aritmética dos preços dos produtos 

function paciencia() {
    let codigo 
    let valor
    let maiorPreco = -Infinity
    let soma = 0
    for(let i = 1; i <= 3; i++){
        codigo = prompt("Digite o codigo do produto")
        valor = parseFloat(prompt("Digite o valor do produto"))
        if(valor > maiorPreco) {
            maiorPreco = valor
        }
        soma += valor
    }
    let media =  soma / 3
    alert("o maior preço lido é: " + maiorPreco)
    alert("A media aritmédica dos valores é: " + media)
    
}