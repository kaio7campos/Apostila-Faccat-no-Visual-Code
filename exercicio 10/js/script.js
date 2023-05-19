// 10)  O  custo  de  um  carro  novo  ao  consumidor  é  a  soma  do  custo  de  fábrica  com  a  porcentagem  do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja  de  28%  e  os  impostos  de  45%,  escrever  um  algoritmo  para  ler o  custo  de  fábrica  de  um  carro, calcular e escrever o custo final ao consumidor. 
function concessionaria() {
    let carro = parseInt(prompt("Digite o valor do carro"));
    let distribuidor = (carro * 28) / 100
    let imposto = (carro * 45) / 100
    let valorTotal = carro + distribuidor + imposto
    alert("O valor final do carro é:"+" "+valorTotal)
}