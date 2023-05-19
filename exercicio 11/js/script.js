// 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais  uma  comissão  também  fixa  para  cada  carro  vendido  e  mais  5% do  valor  das  vendas  por  ele efetuadas. Escrever um algoritmo que leia o número de  carros por  ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 
function lojista() {
    let salarioFixo = parseFloat(prompt("Digite o salario fixo"));
    let vendasUnidade = parseFloat(prompt("Digite quantos carros foram vendidos"));
    let valorTotalVendas =parseFloat(prompt("Digite o valor total das vendas"));
    let valorPorVenda = valorTotalVendas / vendasUnidade
    let lucroPorVenda = (valorPorVenda * 5) / 100
    let extra = (valorTotalVendas * 5) / 100;
    let salarioFinal = salarioFixo + extra;
    alert('Seu lucro por venda foi de:'+' '+lucroPorVenda);   
    alert('Seu lucro total por venda foi de:'+' '+extra);
    alert('O seu salario final é:'+' '+salarioFinal);
}