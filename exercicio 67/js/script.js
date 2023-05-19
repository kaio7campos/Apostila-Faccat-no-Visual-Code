// 67)  Faça  um  algoritmo  que  calcule  e  escreva  a  média  aritmética  dos  números  inteiros  entre  15 (inclusive) e 100 (inclusive). 

function ido() {
    let soma = 0;
    let media = 0;
    for(let i = 15; i <= 100; i++) {
        soma += i
    }
    media = soma / 75;
    console.log("A media dos valores de quinze a setenta e cinco é: " + media);

}