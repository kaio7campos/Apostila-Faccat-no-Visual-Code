// 35) Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
//         

//              até 20 litros, desconto de 3% por litro 
// Álcool       acima de 20 litros, desconto de 5% por litro
// 
// 
// Gasolina     até 20 litros, desconto de 4% por litro 
//              acima de 20 litros, desconto de 6% por litro 
// 
//    Escreva  um  algoritmo  que  leia  o  número  de  litros  vendidos  e  o  tipo  de  combustível (codificado  da seguinte  forma: A-álcool, G-gasolina),  calcule  e  imprima  o  valor  a  ser  pago  pelo  cliente  sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 
function malboro() {
    
    let combustivel = prompt("Qual combustível gostaria ? A para Alcool ou G para Gasolina (com letra maiuscula)");

    switch (combustivel) {
        case "A":
            let litros = parseFloat(prompt("Quantos litros gostaria ?"));
            if (litros <= 20) {
                let valorDoDesconto = (2.90 * 3) / 10
                let valorDoLitroComDesconto = 2.90 - valorDoDesconto
                let total = valorDoLitroComDesconto * litros
                alert("O total da sua compra foi de: R$" + total.toFixed(2))
             } else {
                let valorDoDesconto = (2.90 * 5) / 10
                let valorDoLitroComDesconto = 2.90 - valorDoDesconto
                let total = valorDoLitroComDesconto * litros
                alert("O total da sua compra foi de: " + total.toFixed(2))
             }
             break;
        case "G":
            let litross = parseFloat(prompt("Quantos litros gostaria ?"));
            if (litross <= 20) {
                let valorDoDesconto = (3.30 * 4) / 10
                let valorDoLitroComDesconto = 3.30 - valorDoDesconto
                let total = valorDoLitroComDesconto * litross
                alert("O valor da sua compra foi de: R$" + total.toFixed(2))
            } else {
                let valorDoDesconto = (3.30 * 6) / 10
                let valorDoLitroComDesconto = 3.30 - valorDoDesconto
                let total = valorDoLitroComDesconto * litross
                alert("O valor da sua compra foi de: R$" + total.toFixed(2)) 
            }
            break;
        default:
            alert("Escolha 'A' para alcool ou 'B' para gasolina")
            break;
    }
}