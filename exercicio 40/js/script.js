// 40)  Faça  um  algoritmo  para  ler:  a  descrição  do  produto  (nome),  a  quantidade  adquirida  e  o  preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
//      - Se quantidade  <= 5  o desconto será de 2% 
//      - Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% 
//      - Se quantidade  >  10 o desconto será de 5% 
function preco() {
    let produto = prompt("Escolha qual produto gostaria");
    let quantidade = parseInt(prompt("Escolha a quantidade"));
    let preco = parseFloat(prompt("Digite o preço"));
    let subTotal = quantidade * preco 
    if (quantidade <= 5) {
        let desconto = (subTotal  * 2) / 100
        let total = subTotal - desconto
        alert("O total da sua compra foi de: R$" + total) 
    } else if (quantidade > 5 && quantidade <=10) {
        let desconto = (subTotal * 3) / 100
        let total = subTotal - desconto
        alert("O total da sua compra foi de: R$" + total) 
    } else if (quantidade > 10) {
        let desconto = (subTotal * 5) / 100 
        let total = subTotal - desconto
        alert("O Total da sua compra foi de: R$" +total)
    }
}
