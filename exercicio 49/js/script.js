// 49)  Acrescente  uma  mensagem 'NOVO  CÁLCULO  (S/N)?'  ao  final  do  exercício  [48].  Se  for respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.
function perfect() {
    let nota1
    let nota2
    let escolha = "sim"
    do {
        do {
            nota1 = parseFloat(prompt("Digite sua primeira nota"));
            if (nota1 < 0 || nota1 > 10) {
                alert("Digite somente notas de zero a dez")
            }
        } while (nota1 < 0 || nota1 > 10)

        do {
            nota2 = parseFloat(prompt("Digite sua segunda nota"))
            if (nota2 < 0 || nota2 > 10) {
                alert("Digite somente notas de zero a dez")
            }
        } while (nota2 < 0 || nota2 > 10)

        let media = (nota1 + nota2) / 2
        alert("Sua media foi de: " + media)
        escolha = prompt("Deseja repetir operação ?")
    } while (escolha == "sim")
}