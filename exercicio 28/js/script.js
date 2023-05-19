// 28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

function kbites() {
    let valor1 = parseInt(prompt("Digite um valor"));
    let valor2 = parseInt(prompt("Digite outro valor"));
    let valor3 = parseInt(prompt("Digite mais um valor"));
    if (valor1 > valor2 && valor1 > valor3) {
        alert("O maior valor é" + ' ' + valor1)
    } else if (valor2 > valor1 && valor2 > valor3) {
        alert("O maior valor é" + ' ' + valor2)
    } else {
        alert("O maior valor é" + ' ' + valor3)
    }


    
}