// 33) Ler dois valores e imprimir uma das três mensagens a seguir: 
// ‘Números iguais’, caso os números sejam iguais 
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.  
function neww() {
    let n1 = parseInt(prompt("Digite um número"));
    let n2 = parseInt(prompt("Digite outro número"));
   if (n1 > n2) {
    alert("Primeiro número é maior")
   } else if (n1 == n2) {
    alert("Os números são iguais !")
   } else {
    alert("Segundo número é maior")
   }
}