// 8) Escreva  um  algoritmo  para  ler  o  número  total  de  eleitores  de um  município,  o  número  de  votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
function eleicao() {
    let total = parseFloat(prompt("Digite o total de eleitores"));
    let votosBrancos = parseFloat(prompt("Digite o numero de votos brancos"));
    let votosNulos = parseFloat(prompt("Digite o numero de votos nulos"));
    let votosValidos = parseFloat(prompt("Digite o numero de votos validos"));
    let percentualBrancos = (total * votosBrancos) / 100;
    let percentualNulos = (total * votosNulos) / 100;
    let percentualValidos = (total * votosValidos) / 100;
    alert("O percentual de votos brancos é:"+' '+percentualBrancos);
    alert("O percentual de votos nulos é:"+' '+percentualNulos);
    alert("O percentual de votos validos é:"+' '+percentualValidos);

}