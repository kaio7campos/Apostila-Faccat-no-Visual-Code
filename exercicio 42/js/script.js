// 42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:

// - Ter no mínimo 65 anos de idade. 
// - Ter trabalhado no mínimo 30 anos. 
// - Ter no mínimo 60 anos  e ter trabalhado no mínimo 25 anos. 

// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'.
function firma() {
    let codigo = parseInt(prompt("Digite seu Id"));
    let nascimento = parseInt(prompt("Digite seu ano de nascimento"));
    let admissao = parseInt(prompt("Digite seu ano de admissão"));
    let idade = 2023 - nascimento 
    let tempoServico = 2023 - admissao
    if (idade >= 65) {
        alert("Requer Aposentadoria")
    } else if (tempoServico > 30) {
        alert("Requer Aposentadoria")
    } else if (idade > 60 && tempoServico > 25) {
        alert("Requer Aposentadoria")
    } else {
        alert("Não requer aposentadoria !")
    }

}