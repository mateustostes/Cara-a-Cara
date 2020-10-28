var g_pontuação;
// Vetor de objetos contendo todas as possiveis mensagens visualizadas nos paineis dos jogadores 1 e 2
var g_statusJogo = [
    { msgJogador1: "Por favor, selecione o seu jogador!", msgJogador2: "Por favor, aguarde o jogador 1 selecionar o personagem dele!" },
    { msgJogador1: "Por favor, aguarde o jogador 2 selecionar o personagem dele!", msgJogador2: "Por favor, selecione o seu jogador!" },
    { msgJogador1: "Por favor, faça uma pergunta ao jogador 2!", msgJogador2: "Por favor, aguarde a pergunta do jogador 1!" },
    { msgJogador1: "Por favor, aguarde a resposta do jogador 2!", msgJogador2: "Responda a pergunta do jogador 1 abaixo:" },
    { msgJogador1: "Por favor, abaixe os seus personagens!", msgJogador2: "Por favor, aguarde o jogador 1 abaixar as cartinhas dele!" },
    { msgJogador1: "Por favor, aguarde a pergunta do jogador 2!", msgJogador2: "Por favor, faça uma pergunta ao jogador 1!" },
    { msgJogador1: "Responda a pergunta do jogador 2 abaixo:", msgJogador2: "Por favor, aguarde a resposta do jogador 1!" },
    { msgJogador1: "Por favor, aguarde o jogador 2 abaixar as cartinhas dele!", msgJogador2: "Por favor, abaixe os seus personagens!" }
];

var tempoGasto1;
var tempoGasto2;
var tempoRodando1 = 0;
var tempoRodando2 = 0;
var soma;
// Troca as mensagens de ambos os jogadores, baseado na variavel g_statusJogo
function atualizarMsgJogadores() {
    var indice = parseInt(localStorage.getItem("g_indiceMsgsJogo"));
    if (indice % 2 == 0) {
        tempoGasto1 = parseInt(localStorage.getItem("Tempo"));
        if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 0) {
            soma = 60;
        }
        else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 1) {
            soma = 40;
        }
        else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 2) {
            soma = 20;
        }
        tempoRodando1 = tempoRodando1 + (soma - tempoGasto1);
    }
    else {
        tempoGasto2 = parseInt(localStorage.getItem("Tempo"));
        if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 0) {
            soma = 60;
        }
        else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 1) {
            soma = 40;
        }
        else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 2) {
            soma = 20
        }
        tempoRodando2 = tempoRodando2 + (soma - tempoGasto2);

    }
    if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 0) {
        tempo = 60;
        pontos = 1;
    }
    else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 1) {
        tempo = 40;
        pontos = 2;
    }
    else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 2) {
        tempo = 20;
        pontos = 3;
    }

    localStorage.setItem("Tempo", tempo);
    if (indice == 7) indice = 2;
    else {
        indice++;
    }
    localStorage.setItem("g_indiceMsgsJogo", indice);
}

//perguntar para jogador 1

function perguntarJogador2() {
    var atributo, valorAtributo, texto = "";
    atributo = document.getElementById("selAtributoPersonagem").value;
    valorAtributo = document.getElementById("selValorAtributoPersonagem").value;
    var indice = Object.keys(g_caractPersonagens[0]).indexOf(atributo) - 2;
    texto = "O(a) " + g_atributosPersonagem[indice] + " do seu personagem é equivalente a " + valorAtributo;
    // "Envia" pergunta ao jogador 2. Na verdade nao evia literalmente, mas guarda um valor para ser lido pelo jogador 2
    localStorage.setItem("msgParaJogador2", texto);
    // Assim que envia a pergunta ao jogador 2 fica aguardando a resposta dele (monitora a cada 2 segundos)
    cronometroAguardaRespJogador2 = setInterval(aguardarRespostaJogador2, 1000);
    atualizarMsgJogadores();
    document.getElementById('chuteJogador1').disabled = true;
    document.getElementById('perg1').disabled = true;
    document.getElementById('chuteJogador2').disabled = false;
    document.getElementById('perg2').disabled = false;
}

function aguardarRespostaJogador2() {
    var resposta = localStorage.getItem("respostaDoJogador2");
    if (resposta != null) {
        checarCaractJogadores(resposta);
        console.log(resposta);
        localStorage.removeItem("respostaDoJogador2");
    }
}

//perguntar para jogador 2

function perguntarJogador1() {
    var atributo, valorAtributo, texto = "";
    atributo = document.getElementById("selAtributoPersonagem").value;
    valorAtributo = document.getElementById("selValorAtributoPersonagem").value;
    var indice = Object.keys(g_caractPersonagens[0]).indexOf(atributo) - 2;
    texto = "O(a) " + g_atributosPersonagem[indice] + " do seu personagem é equivalente a " + valorAtributo;
    // "Envia" pergunta ao jogador 2. Na verdade nao evia literalmente, mas guarda um valor para ser lido pelo jogador 2
    localStorage.setItem("msgParaJogador1", texto);
    // Assim que envia a pergunta ao jogador 2 fica aguardando a resposta dele (monitora a cada 2 segundos)
    cronometroAguardaRespJogador2 = setInterval(aguardarRespostaJogador1, 1000);
    atualizarMsgJogadores();
}
function aguardarRespostaJogador1() {
    var resposta = localStorage.getItem("respostaDoJogador1");
    if (resposta != null) {
        checarCaractJogadores(resposta);
        console.log(resposta);
        localStorage.removeItem("respostaDoJogador1");
    }
}

// Parâmetro: resposta: sim ou nao
function responderPergunta1(resposta) {
    localStorage.removeItem("msgParaJogador1");
    localStorage.setItem("respostaDoJogador1", resposta);
    atualizarMsgJogadores();


}

// Parâmetro: resposta: sim ou nao
function responderPergunta2(resposta) {
    localStorage.removeItem("msgParaJogador2");
    localStorage.setItem("respostaDoJogador2", resposta);
    atualizarMsgJogadores();
}



//Rodar o temporizador e informar o vencendor se o tempo acabar
function rodarTempo1() {
    if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 0) {
        var tempo = 60;
    }
    else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 1) {
        var tempo = 40;
    }
    else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 2) {
        var tempo = 20;
    }
    localStorage.setItem("Tempo", tempo)
    TempoDeResposta1 = setInterval(() => {
        tempo = localStorage.getItem("Tempo", tempo);
        tempo--;
        localStorage.setItem("Tempo", tempo);
        if (tempo == 0) {
            if (parseInt(localStorage.getItem("g_indiceMsgsJogo")) % 2 == 0) {
                localStorage.setItem("Vencedor", 2);
                pararTempo1();
            }
            else {
                localStorage.setItem("Vencedor", 1);
                pararTempo1();
            }
        }
    }, 1000);
}

function pararTempo1() {
    clearInterval(TempoDeResposta1);

}

var pontos;

//setInterval(ranking,500);


function ranking() {
    if(localStorage.getItem("Vencedor") == 1){
        var tempoTotal = tempoRodando1;
        var vetPontos = []
        vetPontos = [pontos,tempoTotal]
        localStorage.setItem("PontuacaoRank",JSON.stringify(vetPontos));
    }
    else if (localStorage.getItem("Vencedor") == 2){
        var tempoTotal = tempoRodando2;
        var vetPontos = []
        vetPontos = [pontos,tempoTotal]
        localStorage.setItem("PontuacaoRank",JSON.stringify(vetPontos));
    }        
}





