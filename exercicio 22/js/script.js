// 22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 
function relogio() {
    let horasTrabalhadas = parseFloat(prompt("Digite quantas horas você trabalhou no mês"));
    let salarioPorHora = parseFloat(prompt("Digite quanto recebe por hora"));
    let salarioBase = salarioPorHora * 160;
    if (horasTrabalhadas > 160) {
       let horasExtras = horasTrabalhadas - 160;
       let extra = (salarioPorHora * 50) / 100;
       let extraTotal = extra * horasExtras;
       let salarioTotal =  salarioBase + extraTotal;
       alert("Seu salario final é de:"+salarioTotal);
    } else {
        alert("Seu salario foi de:"+salarioBase);
    }

}

