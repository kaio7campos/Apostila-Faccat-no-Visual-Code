// 75) Escreva um algoritmo que imprima as seguintes seqüências de números: (1, 1 2 3 4 5 6 7 8 9 10) (2, 1 2 3 4 5 6 7 8 9 10) (3, 1 2 3 4 5 6 7 8 9 10) (4, 1 2 3 4 5 6 7 8 9 10) e assim sucessivamente, até que o primeiro número (antes da vírgula), também chegue a 10. 
function continuo(){
    for(let i = 1; i <= 10; i++){
        console.log(i + " Identificador da sequencia")
        for(let j = 1; j <= 10; j++){
            console.log(i + " (" + j + ") ")
        }
    }
}

function chat(){
    for (let i = 1; i <= 10; i++) {
        let output = `${i}, `;
        for (let j = 1; j <= 10; j++) {
          output += `${j} `;
        }
        console.log(output);
    }
      
}

function last(){
    for(let i = 1; i <= 10; i++){
        let contador = `${i}, `
        for(let j = 1; j <= 10; j++){
            contador += `${j} ` 
        }
        console.log(contador)
    }
}