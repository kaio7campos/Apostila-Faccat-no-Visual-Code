// 56) Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. 
function v() {
    let numero 
    do{
        numero = parseInt(prompt("Digite um numero"));
        if (numero < 1 || numero > 10) {
            alert("Sâo permitidos somente numeros de um a dez")
        }
    } while(numero < 1 || numero > 10)
    for (contador = 1; contador <= 10; contador++) {
        let resultado = numero * contador
        console.log(numero + " x " + contador + " = " + resultado)
    }
}