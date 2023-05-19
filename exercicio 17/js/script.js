// 17)  Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

function boletim() {
    let nota1 = parseFloat(prompt("Digite sua 1º nota"));
    let nota2 = parseFloat(prompt("Digite sua 2º nota"));
    media = (nota1 + nota2) / 2
    alert('Sua media foi de:'+media)
    if (media >= 6) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
}