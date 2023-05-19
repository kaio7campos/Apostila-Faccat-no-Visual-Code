// 54) Modifique o  exercício anterior para aceitar somente  valores maiores  que 0 para N. Caso o valor informado (para N) não seja maior que 0, deverá ser lido um novo valor para N. 
function best() {
    let numero
    do {
        numero = parseInt(prompt("Digite um numero"))
        if (numero <= 0) {
            alert("Digite somente numeros maiores que zero ")
        }
    } while (numero <= 0)
    for(contador = 1; contador <= numero; contador++) {
        console.log(contador,numero)
    }
}