/*
function validar(){
    var nome = formulario.nome;
    var email = formulario.email;
    var telefone = formulario.telefone;
    var assunto = formulario.assunto;
    var mensagem = formulario.mensagem

    if(nome.value == "") {
        alert("Nome não informado");

        nome.focus();
    }

    if(email.value == "") {
        alert("E-mail não informado. Exemplo: e-mail@e-mail.com");

        email.focus();
    }

    if(telefone.value == "") {
        alert("Telefone não informado. Exemplo: 11 999998888");

        telefone.focus();
    }

    if(assunto.value == "") {
        alert("Assunto não informado. Exemplo: Dúvida, Orçamento, sugestão etc.");

        assunto.focus();
    }

    if(mensagem.value == "") {
        alert("Escreva mensagem. Detalhe a sua necessidade.");

        mensagem.focus();
    }
}   
*/

/*
var form = document.forms["formulario"];

var inputEmail = form.email;
var valorEmail = form.email.value;

var posicaoArroba = valorEmail.indexOf("g");

if(
    !ValidarEmail(valorEmail)
){
    inputEmail.className = "nao_valido";
    document.querySelector("span.nao_valido").style.display = "block";
    evt.preventDefault();
}

if(document.forms["formulario"] != undefined) {
    var form = document.forms["formulario"];
    
    form.addEventListener("submit", function(evt){
        var formValido = true;

        if(!NaoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.Telefone.value)){
            form.Telefone.className = "nao_valido";
            formValido = false;
        }

        if(!NaoVazio(form.Assunto.value)){
            form.Assunto.className = "nao_valido";
            formValido = false;
        }

        if(!NaoVazio(form.Mensagem.value)){
            form.Mensagem.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.E-Mail.value)){
            form.E-Mail.className = "nao_valido";
            formValido = false;
        }

        if(formValido){
            evt.preventDefault();
        }
    }
}

document.querySelector("form[name=formulario]input").addEventListener("keypress", function()) {
    this.className = "";
}

function ValidarEmail(valorEmail) {
    if(
        valorEmail != "" &&
        valorEmail.indexOf("g") > 3 &&
        valorEmail.lastInindexOf(".") > posicaoArroba
    ){
        return true;
    }else{
        return false;
    }
}

function NaoVazio(texto){
    if(texto.trim().length > 0){
        return false;
    }else{
        return true;
    }
}
*/