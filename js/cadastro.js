
let valor, padrao, erro, iniciar = 0;
var pontosTotais = tempoTotal = 0;

function cadastro() {
    let tabela = [];
    erro = 0;

    //Guarda o nome e valida o REGEX
    let nomeUsuario = document.getElementById("txtNome").value;
    validarNome();
    //Guarda o email e valida o REGEX
    let email = document.getElementById("txtEmail").value;
    validarEmail();

    //Guarda a data de nascimento e valida o REGEX e ajusta o formato real.
    let dataNasc = document.getElementById("txtDataNasc").value;
    validarDataNasc();

    //Guarda o usuario e valida o REGEX 8 a 11 digitos
    let user = document.getElementById("txtUser").value;
    validarUsuario();
    let testeUser = localStorage.getItem("cadastro");
    if (testeUser != null) {
        testeUser = JSON.parse(testeUser);
        testeUser.forEach(valor => {
            if (valor.usuario == user) {
                alert("Usuario já cadastrado!");
                linhaUser2 = document.getElementById('txtUser').style.border;
                document.getElementById('txtUser').classList.add('pulseError');
                erro++;
            }
        })
    }

    //Guarda a senha, valida se está correta e valida o REGEX
    let pwd = document.getElementById("txtPassword").value;
    validarSenha();
    if (pwd != document.getElementById("txtPassword2").value) {
        document.getElementById('txtPassword2').classList.add('pulseError');
        alert("As Senhas não conferem!");
        erro++;
    }

    if (erro == 0) {
        let tabela = {nomeUser: nomeUsuario, email: email, datNasc: dataNasc, usuario: user, senha: pwd, pontos: pontosTotais, tempo: tempoTotal};
        if (typeof (Storage) !== "undefined") {
            let cadastro = localStorage.getItem("cadastro");
            if (cadastro == null) cadastro = [];
            else cadastro = JSON.parse(cadastro);
            cadastro.push(tabela); // Adiciona um novo produto
            localStorage.setItem("cadastro", JSON.stringify(cadastro))
            alert("Cadastro realizado com sucesso!");
        }
        else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
    }

}

function removerPulse(id){
    document.getElementById(id).classList.remove('pulseError');
}

function validarNome() {
    valor = document.getElementById("txtNome").value;
    var testeNome = '';
    padrao = /^[A-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{1,30}(\s[A-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{2,30}(\s[A-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{2,30}){0,10})?$/;
    (padrao.test(valor)) ? testeNome = true : testeNome = false;
    if (testeNome == false) {
        document.getElementById('txtNome').classList.add('pulseError');
        erro++;
        alert("Nome não é valido!");
    }
}

function validarEmail() {
    valor = document.getElementById("txtEmail").value;
    let testeEmail = '';
    padrao = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    (padrao.test(valor)) ? testeEmail = true : testeEmail = false;
    if (testeEmail == false) {
        document.getElementById('txtEmail').classList.add('pulseError');
        erro++;
        alert("Email incorreto!");
    }
}

function validarDataNasc() {
    valor = document.getElementById("txtDataNasc").value;
    let testeDataNasc = '';
    padrao = /^\d{2}\/\d{2}\/\d{4}$/;
    (padrao.test(valor)) ? testeDataNasc = true : testeDataNasc = false;
    if (testeDataNasc == false) {
        document.getElementById('txtDataNasc').classList.add('pulseError');
        erro++;
        alert("Data Nascimento com formato incorreto!");
    }

}

function validarUsuario() {
    valor = document.getElementById("txtUser").value;
    let testeUsuario = '';
    padrao = /^[a-zA-Z1-9]{8,11}$/;
    (padrao.test(valor)) ? testeUsuario = true : testeUsuario = false;
    if (testeUsuario == false) {
        document.getElementById('txtUser').classList.add('pulseError');
        erro++;
        alert("O Usuario deve ter de 8 a 11 digitos ou letras!");
    }
}


function validarSenha() {
    valor = document.getElementById("txtPassword").value;
    let testeSenha = '';
    padrao = /^[a-zA-Z1-9]{8,11}$/;
    (padrao.test(valor)) ? testeSenha = true : testeSenha = false;
    if (testeSenha == false) {
        document.getElementById('txtPassword').classList.add('pulseError');
        erro++;
        alert("A Senha deve ter de 8 a 11 digitos ou letras!");
    }
}

var usuario1;
var senha1;
function validador() {
    if (typeof (Storage) !== "undefined") {
        let entrar = localStorage.getItem("cadastro");
        if (entrar != null) {
            entrar = JSON.parse(entrar);
            entrar.forEach(valor => {
                usuario1 = document.getElementById('txtUser').value;
                senha1 = document.getElementById('txtPassword').value;
                switch (valor.usuario) {
                    case usuario1:
                        switch (valor.senha) {
                            case senha1:
                                iniciar = 1;
                                break;

                        }return;
                    default:
                        if (iniciar < 0)
                            iniciar = 0;
                }




                /* if (valor.usuario == document.getElementById('txtUser').value && valor.senha == document.getElementById('txtPassword').value){
                 console.log('aqui');
                   iniciar = true;
                   return iniciar;
                 }
                 else{
                     console.log('aqui2');
                     iniciar = false;
                 }*/
            });
        }
        else {
            iniciar = 0;

        }
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");
}


function validar() {
    validador()
    if (document.getElementById('txtUser').value == "")
        alert("Favor informar o usuario");
    else if (document.getElementById('txtPassword').value == "")
        alert("Favor informar a senha");
    else if (iniciar == 0) {
        alert("verificando na base de dados");
        alert("Usuário não esta na base de dados")
    }
    else {
        var nomeUsuario = JSON.parse(localStorage.getItem("cadastro"));
        var incluirPontuacao = JSON.parse(localStorage.getItem("PontuacaoRank"));
        nomeUsuario.forEach(valor => {
            if (valor.usuario == usuario1) {
                incluirPontuacao[0] = parseInt(incluirPontuacao[0]) + parseInt(valor.pontos);
                incluirPontuacao[1] = parseInt(incluirPontuacao[1]) + parseInt(valor.tempo);
                valor.pontos = incluirPontuacao[0];
                valor.tempo = incluirPontuacao[1];
            }
        })
        localStorage.setItem("cadastro",JSON.stringify(nomeUsuario));
        alert("verificando na base de dados");
        document.getElementById('audioAcertou').play();
        window.open("ranking.html", "_self");
    }
}


let nomeDoMaior;
var OnomeDoMaior;
var vetNomeDoMaior = [];
function atualizarRank(){

    var Rank = JSON.parse(localStorage.getItem("cadastro"));
    while(Rank != ""){
    let resultado1 = 0;
    let resultado2 = 99999999999999999;
    Rank.forEach((valor) => {
        if(resultado1 <= valor.pontos){
            if(resultado2 > valor.tempo){
                resultado1 = valor.pontos;
                resultado2 = valor.tempo;
                nomeDoMaior = valor.usuario;
        }}
    })
    for(let i=0;i<Rank.length;i++){
        if(nomeDoMaior == Rank[i].usuario){
            OnomeDoMaior = Rank.splice(i,1);
        }
    }
    vetNomeDoMaior.push(OnomeDoMaior);
    }

    console.log(vetNomeDoMaior);
    for(let i=0;i<vetNomeDoMaior.length;i++){
        document.getElementById(`nome${i}`).innerHTML = Object.values((vetNomeDoMaior)[i][0])[4];
        document.getElementById(`ponto${i}`).innerHTML = Object.values((vetNomeDoMaior)[i][0])[5];
        document.getElementById(`tempo${i}`).innerHTML = Object.values((vetNomeDoMaior)[i][0])[6];
    }
    console.log((vetNomeDoMaior[0].tempo))
}

