// 36)  Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,  bem  como  as  das  mulheres).  Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova,  e  o  produto  das  idades  do  homem  mais novo com a mulher mais velha.
function humano() {
    let homem1 = parseInt(prompt("Digite a idade do primeiro homem"));
    let homem2 = parseInt(prompt("Digite a idade do segundo homem"));
    let mulher1 = parseInt(prompt("Digite a idade da primeira mulher"));
    let mulher2 = parseInt(prompt("Digite a idade da segunda mulher"));

    if (homem1 > homem2 && mulher1 > mulher2) {
        let soma = homem1 + mulher2
        let soma2 = homem2 + mulher1
        document.getElementById('demo').innerHTML = "A soma do homem mais velho com a mulher mais nova: " + soma +
            "A soma do homem mais novo com a mulher mais velha é: " + soma2
    } else {
        let soma = homem2 + mulher1
        let soma2 = homem1 + mulher2
        document.getElementById('demo').innerHTML = "A soma do homem mais velho com a mulher mais nova: " + soma + " A soma do homem mais novo com a mulher mais velha é: " + soma2
    }
}