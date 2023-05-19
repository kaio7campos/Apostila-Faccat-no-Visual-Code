// 60) Ler  10  valores  e  escrever  quantos  desses  valores  lidos  estão  no  intervalo  [10,20]  (inlcuindo  os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. 
let intervalo = 0
let foraDoIntervalo = 0
for(i = 1; i <= 10 ; i++) {
    let valor = parseInt(prompt("Digite um valor " + i + "º"))
    if(valor > 9 && valor < 21) {
        intervalo++
    } else {
        foraDoIntervalo++
    }
}
console.log("Os valores dentro do intervalo são: " + intervalo)
console.log("Os valores fora do intervalo são: " + foraDoIntervalo)