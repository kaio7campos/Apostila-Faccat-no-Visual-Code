// 78) Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a  leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. 
function test(){
let nomes = [];

for(let i = 1; i <= 10; i++){
    nomes.push(prompt(`Digite o nome da ${i}º pessoa: `));
}

let nomeBusca = prompt("Digite o nome a ser buscado: ");

let achou = false;
for(let i = 1; i < nomeBusca.length; i++ ) {
    if (nomes[i] === nomeBusca) {
        achou = true;
        break;
    }
}
if (achou == nomes) {
    console.log("")
}

}

function best(){
    let nomes = []
    for(let i = 1; i <= 3; i++){
        let nome = prompt(`Digite o nome da ${i}º pessoa:`);
        nomes.push(nome);
    }

    let nomeBusca = prompt(`Digite o nome que deseja buscar:`);

    if (nomes.includes(nomeBusca)){
        alert(`Nome consta no registro`);
    } else {
        alert(`Nome não consta no resgistro`);
    }
}