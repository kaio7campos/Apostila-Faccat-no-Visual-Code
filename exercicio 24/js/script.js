// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total.
function vendedor() {
    let salarioBase = parseFloat(prompt("Digite seu salario"));
    let valorVendas = parseFloat(prompt("Digite o valor das vendas"));
    if (valorVendas <= 1500) {
        let lucroVendas = (valorVendas * 3) / 100;
        let salarioFinal = salarioBase + lucroVendas;
        alert("Seu salario final é:"+salarioFinal)
    } else {
        let lucroVendas = (1500 * 3) / 100;
        let extra = valorVendas - 1500;
        let extraFinal = (extra * 5) / 100;
        let salarioFinal = salarioBase + lucroVendas + extraFinal;
        alert("O seu salario final é:"+salarioFinal)
    }
}