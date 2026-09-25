const formulario = 
document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = 
    document.querySelector("#nome").value;

    const email = 
    document.querySelector("#email").value;

    const senha = 
    document.querySelector("#senha").value;

    const confirmarSenha = 
    document.querySelector("#confirmar-senha").value;

    if (nome === ""){
        alert("Digite seu nome!");
        return;
    }

    if (email === ""){
        alert("digite seu email!")
        return;
    }

    if (senha === ""){
        alert("digite sua senha!")
        return;
    }

    if (confirmarSenha === ""){
        alert("confirme sua senha!")
        return;
    }

    if (senha !== confirmarSenha){
        alert("as senhas não são iguais!")
        return;
    }
    alert("cadastro válido!");
});
