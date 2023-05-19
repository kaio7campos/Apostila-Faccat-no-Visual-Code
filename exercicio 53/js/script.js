// 53) Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 

function lol() {
    let numero = parseInt(prompt("Digite um numero"))
    for (numero; numero >= 1; numero--) {
        console.log(numero)
    }
}

// chat Gpt

function lil() {
    let numero = parseInt(prompt("Digite um numero"))
    for(let contador = 1; contador <= numero; contador++) {
        console.log(contador, numero)
    }
}