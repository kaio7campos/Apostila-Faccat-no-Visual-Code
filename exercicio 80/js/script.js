// 80) Ler um vetor Q de 20 posições (aceitar somente números positivos). Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
function duo(){
    let q = [];
    let max = 0;
    let position = 0;

    for(let i = 1; i <= 3; i++){
        let num = parseInt(prompt("Digite um valor positivo"))
        while (num < 0) {
            num = parseInt(prompt("Digite um numero positivo"))
        }
        q.push(num);
    }

    for(let i = 1; i <= 3; i++){
        if(q[i] > max){
            max = q[i];
            position = i;
        }
    }
    console.log("O maior elemento de Q é " + max + " e sua posição no vetor é " + position)
}