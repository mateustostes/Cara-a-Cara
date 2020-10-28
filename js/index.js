// Armazena o nível de dificuldade para ser utilizado na interface do jogo (jogar.html)
function jogar(selNivel) {
    let nivelDificuldade;
    localStorage.removeItem("Vencedor");
    if (typeof(Storage) !== "undefined") {
        nivelDificuldade = document.getElementById(selNivel).value;
        localStorage.setItem("nivelDificuldade",nivelDificuldade);
        gravarIndiceMsgsJogadores();
     
        window.close();
        window.open("jogador1.html","_blank");
        window.open("jogador2.html","_blank");
    }
    else alert("Seu navegador não possui suporte para rodar este jogo. Atualize-o ou utilize outro para poder jogar");
}

// Controla qual mensagem devera ser exibida aos jogadores durante a partida
// Inicialmente comecara em zero, porem após iniciarem (jogadores) a partida esse indice variara entre 3 e 8 (num loop)
function gravarIndiceMsgsJogadores() {
    localStorage.setItem("g_indiceMsgsJogo","0");
}


