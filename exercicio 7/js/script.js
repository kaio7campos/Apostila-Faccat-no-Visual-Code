// 7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias
function life() {
    let idade = parseInt(prompt('digite sua idade em anos'));
    let meses = parseInt(prompt('Digite seus meses de vida atuais'));
    let dias = parseInt(prompt('Digite seus dias de vida referente ao mês'));
    life = (idade * 365) + (meses * 30) + dias
    alert('Seus dias de vida são:'+' '+life)
}