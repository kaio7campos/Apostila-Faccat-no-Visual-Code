// 9) Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos. Calcular a média da  turma  e  contar  quantos  alunos  obtiveram  nota  acima  desta  média  calculada.  Escrever  a  média  da turma e o resultado da contagem. 
function object(){
    const notas = []
    let soma = 0
    let notasAcimaDaMedia = 0

    for (let i = 1; i <= 3; i++){
        const nota = parseFloat(prompt(`Digite a nota do ${i}º`))
        notas.push(nota)
        soma += notas
    }

    let media = soma / 20

    
    for(let i = 1; i <= 3; i++){
        if(notas[i] > media){
            notasAcimaDaMedia++
        }
    }
    console.log(`A media da turma é: ${media.toFixed(2)}`);
    console.log(`Numero de alunos com nota acima da média é: ${notasAcimaDaMedia}`);
}
 function op(){
    // Inicialização de variáveis
let soma = 0;
let media = 0;
let contador = 0;
const notas = [];

// Loop para leitura das notas
for (let i = 0; i < 3; i++) {
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i+1}:`));
  notas.push(nota); // Adiciona a nota na lista de notas
  soma += nota; // Acumula a nota lida na soma
}

// Cálculo da média
media = soma / 20;

// Loop para contagem de alunos com nota acima da média
for (let i = 0; i < 3; i++) {
  if (notas[i] > media) {
    contador++; // Incrementa o contador se a nota for maior que a média
  }
}

// Saída de resultados
console.log(`A média da turma é: ${media.toFixed(2)}`);
console.log(`Número de alunos com nota acima da média: ${contador}`);

 }