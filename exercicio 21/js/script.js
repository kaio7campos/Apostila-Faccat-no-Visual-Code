// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
function xadrez() {
    let inicio = parseInt(prompt("Digite o horario de inicio"));
    let fim = parseInt(prompt("Digite o horario de termino"));
    if (fim < inicio) {
        let duracao = (24 - inicio) + fim;
        alert("A duração da partida foi de:"+" "+duracao+"H");
    }  else if (fim > duracao) {
        duracao = fim - inicio
        alert("A duração da partida foi de:"+" "+duracao+"H")
    } else if (fim = inicio) {
        duracao = 24
        alert("A duração da partida foi de:"+" "+duracao+"H")
    }
}