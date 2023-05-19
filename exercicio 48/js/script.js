// 48) Escreva  um  algoritmo  para  ler  as  notas  da  1a.  e  2a.  avaliações  de um  aluno,  calcule  e  imprima  a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. 

function tent() {
    let nota1
    let nota2
    do {
        nota1 = parseFloat(prompt("Digite sua primeira nota"));
        if (nota1 < 0 || nota1 > 10) {
            alert("Digite somente numeros de zero a dez")
        }
    } while (nota1 < 0 || nota1 > 10)

    do {
        nota2 = parseFloat(prompt("Digite sua segunda nota"));
        if (nota2 < 0 || nota2 > 10) {
            alert("Digite somente numeros de zero a dez")
        }

    } while(nota2 < 0 || nota2 > 10)

    let media = (nota1 + nota2) / 2
    alert("Sua media foi de: " + media)
}