// 71) Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números. Depois de ler  todos  os  números  o  algoritmo  deve  apresentar  na  tela  o  maior  dos  números  lidos  e  a  média  dos números lidos. 

function bb(){
let valor = 0
let soma = 0
let maiorValor = Number.MAX_VALUE
for (let i = 1; i >= 10; i++) {
    valor = parseInt(prompt("Digite um valor"));
    
    console.log(soma)
    if(valor > maiorValor) {
        maiorValor = valor
    }
    soma += valor

}
}
function best() {
    let quantidade = parseInt(prompt("Digite a quantidade de numeros a serem lidos: "))
    let soma = 0
    let maiorValor = -Infinity
    
    for( i = 1; i <= quantidade; i++) {
        let valor = parseInt(prompt("Digite um valor"));
        if(valor > maiorValor) {
            maiorValor = valor
        }
        soma += valor
        console.log(soma)
    }
    let media = soma / quantidade
    alert("O maior valor lido é: " + maiorValor)
    alert("A media dos valores lidos é: " + media)
}

function chat() {
    let quantidade = parseInt(prompt("Digite a quantidade de números a serem lidos:"));
let soma = 0;
let maior = -Infinity;

for(let i = 0; i < quantidade; i++){
  let numero = parseFloat(prompt("Digite um número:"));
  soma += numero;
  if(numero > maior){
    maior = numero;
  }
}

let media = soma / quantidade;

console.log("O maior número lido é: " + maior);
console.log("A média dos números lidos é: " + media);

}