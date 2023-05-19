// Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada. 
let somaMenor40 = 0 
for (let i = 1; i <= 10; i++){
    let valor = parseFloat(prompt("Digite um valor " + i))
    if (valor < 40) {
        somaMenor40 += valor
    } 
}
alert("A soma dos valores menores que quarenta é: " + somaMenor40)






