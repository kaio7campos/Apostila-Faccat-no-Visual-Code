// 15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
function validar() {
    let valor = parseInt(prompt("Escolha um valor"));
    if (valor>-1) {
        alert('Valor é positivo')
    }else {
        alert('Valor é negativo')
    }
}