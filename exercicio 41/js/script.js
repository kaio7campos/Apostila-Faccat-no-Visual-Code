// 41)  Faça  um  algoritmo  para  ler  as  3  notas  obtidas  por  um  aluno  nas  3 verificações  e  a  média  dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo: 

//                                  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
//  Média_de_Aproveitamento  =    ----------------------------------------------------
//                                                          7
// Média de Aproveitamento Conceito 
//               > =  9,0       A 
//    > =  7,5  e  <  9,0       B 
//    > =  6,0  e  <  7,5       C 
//                 <  6,0       D 
function boletim() {
    let n1 = parseFloat(prompt("Digite sua primeira nota"));
    let n2 = parseFloat(prompt("Digite sua segunda nota"));
    let n3 = parseFloat(prompt("Digite sua terceira nota"));
    let mediaExercicios = parseFloat(prompt("Digite sua media de exercicios"));
    let mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7
    if (mediaAproveitamento >= 9.0) {
        alert("Sua nota é A")
    } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0 ) {
        alert("Sua nota é B")
    } else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 9.0) {
        alert("Sua nota é C")
    } else if (mediaAproveitamento < 6.0) {
        alert("Sua nota é D")
    }
}