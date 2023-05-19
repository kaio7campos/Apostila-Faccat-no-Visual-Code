// 25) Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
function bank() {
    let saldo = parseFloat(prompt("Digite seu saldo"));
    let debito = parseFloat(prompt("Digite seu debito"));
    let credito = parseFloat(prompt("Digite seu credito"));
    let saldoAtual = saldo - debito + credito;
    if (saldoAtual >= 0) {
        alert("Saldo Positivo");
    } else {
        alert("Saldo Negativo");
    }
}