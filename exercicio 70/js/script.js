// 70) Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. 

function chat() {
    const numero = 100;

    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;

    for (let i = 1; i <= 4; i++) {
        const valor = parseFloat(prompt("Digite o valor: " + i));

        if (valor < menorValor) {
            menorValor = valor;
        }
        if (valor > maiorValor) {
            maiorValor = valor
        }
    }

    console.log(`O menor valor lido é: ${menorValor}`);
    console.log(`O maior valor lido é: ${maiorValor}`);
}



function op(){
    // Define as constantes para o número de linhas e colunas
const linhas = 10;
const colunas = 60;

// Define uma variável para armazenar o resultado
let quadrado = "";

// Loop pelas linhas
for (let i = 1; i <= linhas; i++) {
  // Loop pelas colunas
  for (let j = 1; j <= colunas; j++) {
    // Verifica se é a primeira ou a última linha ou coluna, e adiciona o sinal de "+" nesses casos
    if (i === 1 || i === linhas || j === 1 || j === colunas) {
      quadrado += "+";
    } else {
      // Caso contrário, adiciona um espaço em branco
      quadrado += " ";
    }
  }
  
  // Adiciona uma quebra de linha ao final de cada linha
  quadrado += "\n";
}

// Imprime o resultado no console
console.log(quadrado);

}