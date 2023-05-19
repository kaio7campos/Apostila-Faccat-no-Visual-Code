// 59) Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS. 
function leitura() {
    let valor1  = parseInt(prompt("Digite um valor"))
    let valor2  = parseInt(prompt("Digite um valor"))
    let valor3  = parseInt(prompt("Digite um valor"))
    let valor4  = parseInt(prompt("Digite um valor"))
    let valor5  = parseInt(prompt("Digite um valor"))
}

// let contadorNegativo = 0;

// for (let i = 1; i <= 10; i++){
//     let valor = parseInt(prompt("Digite o valor " + i + ":"));
//     if(valor < 0) {
//         contadorNegativo++;
//     }
    
// }

// console.log("Foram digitados" + contadorNegativo + "valores negativos")

let contadorNegativos = 0;

for(let i = 1; i <= 10; i++){
  let valor = parseFloat(prompt(`Digite o valor ${i}:`));
  if(valor < 0){
    contadorNegativos++;
  }
}

console.log(`Foram digitados ${contadorNegativos} valores negativos.`);
