// 65) Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos (incluindo os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro valor lido. 

// 66)  O  mesmo  exercício  anterior,  mas  agora,  considere  que  o  segundo  valor  lido poderá  ser  maior  ou menor que o primeiro valor lido, ou seja, deve-se testá-los. 

function blz() {
    let valor1 = parseInt(prompt("Digite o primeiro valor"));
    let valor2 = parseInt(prompt("Digite o segundo valor"));
    let soma = 0
    if (valor1 > valor2) {
        for(let i = valor2; i <= valor1; i++) {
            soma += i
        }
        alert("A soma dos valores entre " + valor2 + " e " + valor1 + " é "+ soma)
    } else {
        for (let i = valor1; i <= valor2; i++) {
            soma += i
        }
        alert("A soma dos valores entre " + valor1 + " e " + valor2 + " é " + soma)
    }
}