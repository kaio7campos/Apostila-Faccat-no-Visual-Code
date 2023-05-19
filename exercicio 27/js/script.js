// 27) Ler um valor e escrever se é positivo, negativo ou zero.
function validador() {
    let valor = parseInt(prompt('Escolha um valor'));
    if (valor > 0) {
        alert('Valor é Positivo !')
    } else if (valor == 0) {
        alert("Valor é neutro")
    } else {
        alert("Valor é negativo")
    }
}