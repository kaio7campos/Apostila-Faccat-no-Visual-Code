// 68) Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que  permita  a  entrada  das  seguintes  informações:  a)  o  número  total de  mercadorias  no  estoque;  b)  o valor  de  cada  mercadoria.  Ao  final  imprimir  o  valor  total  em  estoque  e  a  média  de  valor  das mercadorias.
function loja() {
    const quantidadeTotal = parseInt(prompt("Digite a quantidade em estoque"));
    let valorTotal = 0
    for(let i = 1; i <= quantidadeTotal; i++) {
        const valorUnitario = parseFloat(prompt("Digite o valor da mercadoria " + i))
        valorTotal += valorUnitario
    }

    const mediaValorMercadoria = valorTotal / quantidadeTotal;
    console.log(`O valor em estoque: R$ ${valorTotal.toFixed(2)}`);
    console.log(`A média do valor das mercadorias: R${mediaValorMercadoria.toFixed(2)}`);
    
}

