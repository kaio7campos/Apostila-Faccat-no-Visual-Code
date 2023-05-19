// 20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

function ordem() {
    let valor1 = parseInt(prompt("Digite um valor"));
    let valor2 = parseInt(prompt("Digite um segundo valor"));
    if (valor1 > valor2) {
        alert("A ordem crescente é" + ' ' + valor2 +' '+ valor1)
    } else {
        alert("A ordem crescente é" + ' ' + valor1 + ' ' + valor2)
    }
}