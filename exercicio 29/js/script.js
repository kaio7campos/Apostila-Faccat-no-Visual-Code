// 29)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores. 
function validador() {
    let valor1 = parseInt(prompt("Digite um valor"));
    let valor2 = parseInt(prompt("Digite outro valor"));
    let valor3 = parseInt(prompt("Digite mais um valor"));
    if (valor1 > valor2 && valor1 > valor3) {
        if (valor2 > valor3) {
            alert("A soma dos dois maiores números é: " + (valor1 + valor2));
        } else {
            alert("A soma dos dois maiores números é: " + (valor1 + valor3));
        }
    } else if (valor2 > valor1 && valor2 > valor3) {
        if (valor1 > valor3) {
            alert("A soma dos dois maiores números é: " + (valor2 + valor1));
        } else {
            alert("A soma dos dois maiores números é: " + (valor2 + valor3));
        }
    } else {
        if (valor1 > valor2) {
            alert("A soma dos dois maiores números é: " + (valor3 + valor1));
        } else {
            alert("A soma dos dois maiores números é: " + (valor3 + valor2));
        }
    }

}   