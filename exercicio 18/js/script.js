// 18)  Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

function voto() {
    let anoAtual = parseInt(prompt("Digite o ano atual !"));
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento !"));
    idade = anoAtual - anoNascimento
    alert(idade)
    if (idade >= 16) {
        alert("Pode votar !")
    } else {
        alert("Não pode votar")
    }
}