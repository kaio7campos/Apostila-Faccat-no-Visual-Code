// 31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
function sorte() {
    let a = parseFloat(prompt("Digite o valor de A"));
    let b = parseFloat(prompt("Digite o valor de B"));
    let c = parseFloat(prompt("Digite o valor de C"));
    if (a < b+c && b < a + c && c < a + b) {
        alert("É possivel formar um triângulo")
    } else {
        alert("Não é possivel formar um triângulo")
    }
}