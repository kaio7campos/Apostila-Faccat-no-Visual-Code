// 13)  Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
//                          n1 * 2 + n2 * 3 + n3 * 5 
//  mediafinal    =    -----------------------------------
//                                   10

function media() {
    let nota1 = parseFloat(prompt("Digite sua 1º nota !"));
    let nota2 = parseFloat(prompt("Digite sua 2º nota !"));
    let nota3 = parseFloat(prompt("Digite dua 3º nota !"));
    media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
    alert("Sua media foi de:"+media)
}
