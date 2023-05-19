// 73)  A  prefeitura  de  uma  cidade  deseja  fazer  uma  pesquisa  entre  seus  habitantes.  Faça  um  algoritmos para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever: 

function s() {
    let familias = parseInt(prompt("Digite a quantidade de familias"))
    let rendaPorFamilia = 0
    let maiorSalario = -Infinity
    let filhos = 0 
    let somaSalario = 0
    let somaFilhos = 0
    let familiasAbaixo = 0
    for (let i = 1; i <= familias; i++) {
        rendaPorFamilia = parseInt(prompt("Digite a soma dos salarios dos familiares"))
        filhos = parseInt(prompt("Digite a quantidade de filhos"))
        if (rendaPorFamilia > maiorSalario) {
            maiorSalario = rendaPorFamilia
        }
        if (rendaPorFamilia < 150) {
            familiasAbaixo++
        }
        somaSalario += rendaPorFamilia
        somaFilhos += filhos
    }
    let percentual = (familias * familiasAbaixo) / 100
    let mediaPopulação = somaFilhos / familias
    let mediaSalario = somaSalario / familias
    console.log("A media do numero de filhos é: " + mediaPopulação.toFixed(2))
    console.log("A media de salário da população é: " + mediaSalario)
    console.log("O maior salario é: " + maiorSalario)
    console.log("O percentual de familias com salario a baixo de 150 é: " + percentual)
    
}

