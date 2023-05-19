// 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
function promocao() {
    let salario = parseInt(prompt('Digite o seu salario'));
    let aumento = parseInt(prompt("Digite o percentual do aumento"));
    let valorAumento = (salario * aumento) / 100
    let salarioFinal = salario + valorAumento
    alert('Seu salario completo é:'+ ' '+salarioFinal)
}
