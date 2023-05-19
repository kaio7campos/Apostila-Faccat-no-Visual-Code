// 2) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
function jogo() {
    let gols1 = parseInt(prompt("Digite quantos gols o primeiro time fez "));
    let gols2 = parseInt(prompt("Digite quantos gols o segundo time fez "));
    if (gols1 > gols2) {
        alert("Time 1 Ganhou")
    } else if (gols2 > gols1) {
        alert("Time 2 Ganhou")
    } else {
        alert("Empate acirrado")
    }
}