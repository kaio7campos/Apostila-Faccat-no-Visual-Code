// 16) As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. 

function loja() {
    let maca = parseFloat(prompt("Quantas maças você gostaria !"));
    let total
    if (maca > 11) {
        total = maca * 1 
    } else {
        total = maca * 1.30
    }
    alert("o total da sua compra foi de:"+' R$'+total.toFixed(2))
}