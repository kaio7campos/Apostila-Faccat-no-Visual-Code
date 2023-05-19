// 37) Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
//                      Até 5 Kg        Acima de 5 Kg 
//            Morango R$ 2,50 por Kg    R$ 2,20 por Kg 
//             Maçã R$ 1,80 por Kg      R$ 1,50 por Kg 
// 
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda  um  desconto  de  10%  sobre  este  total.  Escreva  um  algoritmo  para  ler  a  quantidade  (em  Kg)  de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 

function loja() {
    let = fruta = prompt("Qual fruta gostaria ?");
    switch (fruta) {
        case 'morango':
            let morango = parseInt(prompt("Quantos morangos gostaria"));
            if (morango <= 5) {
                let subTotal = morango * 2.50
                document.getElementById('demo').innerHTML = "O total da sua compra é: " + subTotal
            } else if (morango > 5) {
                let subTotal = morango * 2.20
                document.getElementById('demo').innerHTML = "O total da sua compra é: " + subTotal
            }
            break;
        case 'maça':
            let maca = parseInt(prompt("Quantas maças gostaria ?"));
            if (maca <= 5) {
                let subTotal = maca * 1.80
                document.getElementById("demo").innerHTML = "O total da sua compra é: " + subTotal
            } else if (maca > 5) {
                let subTotal = maca * 1.50
                document.getElementById("demo").innerHTML = "O total da sua compra é: " + subTotal
            }
            break;
        default:
            document.getElementById("demo").innerHTML = "Escolha morango ou maças"
            break;
    }
}