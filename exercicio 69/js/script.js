// 68) Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo que  permita  a  entrada  das  seguintes  informações:  a)  o  número  total de  mercadorias  no  estoque;  b)  o valor  de  cada  mercadoria.  Ao  final  imprimir  o  valor  total  em  estoque  e  a  média  de  valor  das mercadorias. 
// 69) O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque. Então  o  funcionamento  deverá  ser  da  seguinte  forma:  ler  o  valor  da mercadoria  e  perguntar  ‘MAIS MERCADORIAS  (S/N)?’.  Ao  final,  imprimir  o  valor  total  em  estoque  e  a  média  de  valor  das mercadorias em estoque. 
let valorUnitario = 0
let somaValorMercadoria = 0
let decisao = "sim"
let unidade = 1
do {
    valorUnitario = parseFloat(prompt("Digite o valor do produto"));
    somaValorMercadoria += valorUnitario
    decisao = prompt("Deseja adiconar mais produtos")
    if (decisao == "sim") {
        unidade++
    }
} while(decisao == "sim")
let mediaValorMercadoria = somaValorMercadoria / unidade
console.log(unidade)
console.log(`O valor total das mercadorias é: ${somaValorMercadoria}`);
console.log(`A media do valor das mercadorias é de: ${mediaValorMercadoria}`);
