// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
function crescente()  {
    let valor1 = parseInt(prompt("Digite um valor"));
    let valor2 = parseInt(prompt("Digite um segundo valor"));
    if (valor1 > valor2) {
        alert(valor1+' '+"É o maior valor")
    } else {
        alert(valor2+' '+"É o maior valor")
    }
}