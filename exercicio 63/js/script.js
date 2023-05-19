// 63) Escreva  um  algoritmo  para  ler  10  números  e  ao  final  da  leitura  escrever  a  soma  total  dos  10 números lidos. 
let soma = 0
for (let i = 1; i <= 10; i++) {
    let valor = parseFloat(prompt("Digite um valor: " + i));
    soma += valor
}
console.log("A Total da soma é: " + soma)