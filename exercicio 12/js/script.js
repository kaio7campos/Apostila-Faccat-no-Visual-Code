// 12) Escreva  um  algoritmo  para  ler  uma  temperatura  em  graus  Fahrenheit,  calcular  e  escrever  o  valor correspondente em graus Celsius (baseado na fórmula abaixo): 

//     C      =   F - 32                    
// ----------  -----------                                 // formula <- (5/9) * (fahrenheit - 32)
//     5      =     9 

function conversor() {
    let GrausFahrenheit = parseFloat(prompt("Digite graus em Fahrenheit"));
    let formula = (5/9) * (GrausFahrenheit - 32);
    alert('Os graus em celcius'+' '+formula+'°');
}