// 38)  Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código  armazenado  internamente  no  algoritmo  (igual  a 1234)  deve  ser  apresentada  a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa  é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
function acesso() {
    let name = prompt("Digite seu nome: ");
    let password = prompt("Digite sua senha");
    if (name == war) {
     alert("Prossiga") 
    } else {
        alert("Usuario invalido")
    } if (password == 333) {
        alert("Acesso liberado")
    } else {
        alert("Acesso negado")
    }
    
}
function login() {
    const user = "caos"
    const password = 333

    const userOn = prompt("Digite seu nome:")
    if (userOn !== user) {
        alert("Nome invalido !")
    } else {
        const senha = prompt("Digite sua senha")
        if (senha == password) {
            alert("Acesso permitido !");
        } else {
            alert("Acesso negado !");
        }
    }
}