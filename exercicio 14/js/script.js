// 14)  Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,  caso contrário escrever NÃO É MAIOR QUE 10!

function validar(){
    let valor = parseInt(prompt("Escolha um valor"));
    if (valor>10) {
       alert("Valor maior que DEZ !"); 
    } else {
        alert("valor não é maior que DEZ !");
    }
}