// INICIO: VARIAVEIS GLOBAIS -------------------------------------------------------------------------------------------------------------------------------------
var cronometroAguardaRespJogador2;
var chute = false;
// Cronometro que controla o tempo que a borda da carta ficara visivel (para ajudar o usuario)
var g_cronometro;

// Vetor contendo apenas duas posições (indices) da matriz do tabuleiro onde se encontra o personagem selecionado pelo jogador
// Ex: g_personagemJogador = [2,3]. Personagem localizado na matriz na posição LINHA = 2 e COLUNA = 3 do tabuleiro
var g_personagemJogador = [];

// Matriz contendo os numeros dos personagens. Ex: se houver 16 cartas (carta1.png, carta2.png, ..., carta16.png). Uma versao aletoria dessa matriz poderá ser:
// 0: (4) [13, 2, 8, 10]
// 1: (4) [14, 12, 5, 11]
// 2: (4) [15, 7, 6, 16]
// 3: (4) [3, 9, 1, 4]
var g_caractPersonagens = [
    { carta: 1, nome: "Wolverine", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 2, nome: "capitaoAmerica", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Herói", poder: "Não", logotipo: "Sim", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Sim" },
    { carta: 3, nome: "PanteraNegra", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Preto", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 4, nome: "Batman", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Herói", poder: "Não", logotipo: "Sim", olho: "Branco", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 5, nome: "Flash", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Herói", poder: "Sim", logotipo: "Sim", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 6, nome: "Aquaman", cabelo: "Visível", mascara: "Não usa", genero: "M", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Sim" },
    { carta: 7, nome: "Gamorra", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Alienígena", cinto: "Não", acessorioCabeca: "Usa", voa: "Não", corPele: "Colorida", arma: "Não" },
    { carta: 8, nome: "ViuvaNegra", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Preto", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Não usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 9, nome: "Tempestade", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Branco", uniforme: "Preto", universo: "Marvel", especie: "Humano", cinto: "Não", acessorioCabeca: "Não usa", voa: "Sim", corPele: "Comum", arma: "Não" },
    { carta: 10, nome: "MulherMaravilha", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Não", logotipo: "Sim", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Sim" },
    { carta: 11, nome: "MulherGaviao", cabelo: "Não visível", mascara: "Usa", genero: "F", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Branco", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Não", acessorioCabeca: "Usa", voa: "Sim", corPele: "Comum", arma: "Não" },
    { carta: 12, nome: "Ravena", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Alienígena", cinto: "Sim", acessorioCabeca: "Não usa", voa: "Sim", corPele: "Comum", arma: "Não" },
    { carta: 13, nome: "Magneto", cabelo: "Não visível", mascara: "Não usa", genero: "M", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Sim", corPele: "Comum", arma: "Não" },
    { carta: 14, nome: "CaveiraVermelha", cabelo: "Não visível", mascara: "Não usa", genero: "M", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Preto", universo: "Marvel", especie: "Humano", cinto: "Sim", acessorioCabeca: "Não usa", voa: "Não", corPele: "Colorida", arma: "Não" },
    { carta: 15, nome: "Thanos", cabelo: "Não visível", mascara: "Não usa", genero: "M", tipo: "Vilão", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Alienígena", cinto: "Sim", acessorioCabeca: "Não usa", voa: "Não", corPele: "Colorida", arma: "Sim" },
    { carta: 16, nome: "Coringa", cabelo: "Visível", mascara: "Não usa", genero: "M", tipo: "Vilão", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Não", acessorioCabeca: "Não usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 17, nome: "Bane", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Vilão", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 18, nome: "MestredoOcenado", cabelo: "Não visível", mascara: "Usa", genero: "M", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Vermelho", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Sim" },
    { carta: 19, nome: "Nebulosa", cabelo: "Não visível", mascara: "Usa", genero: "F", tipo: "Vilão", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "Marvel", especie: "Alienígena", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Colorida", arma: "Não" },
    { carta: 20, nome: "Mistica", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Amarelo", uniforme: "Colorido", universo: "Marvel", especie: "Humano", cinto: "Não", acessorioCabeca: "Não usa", voa: "Não", corPele: "Colorida", arma: "Não" },
    { carta: 21, nome: "Hela", cabelo: "Não visível", mascara: "Usa", genero: "F", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Preto", universo: "Marvel", especie: "Alienígena", cinto: "Não", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 22, nome: "Alerquina", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Herói", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Humano", cinto: "Sim", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Não" },
    { carta: 23, nome: "MulherGato", cabelo: "Visível", mascara: "Usa", genero: "F", tipo: "Vilão", poder: "Não", logotipo: "Não", olho: "Preto", uniforme: "Preto", universo: "DC", especie: "Humano", cinto: "Não", acessorioCabeca: "Usa", voa: "Não", corPele: "Comum", arma: "Sim" },
    { carta: 24, nome: "HeraVenenosa", cabelo: "Visível", mascara: "Não usa", genero: "F", tipo: "Vilão", poder: "Sim", logotipo: "Não", olho: "Preto", uniforme: "Colorido", universo: "DC", especie: "Alienígena", cinto: "Não", acessorioCabeca: "Não usa", voa: "Não", corPele: "Colorida", arma: "Não" }
];

// Vetor contendo todas as possíveis características físicas de um personagem
var g_atributosPersonagem = ["Cabelo", "Máscara", "Gênero", "Tipo", "Poder", "Logotipo", "Olho", "Uniforme", "Universo", "Espécie", "Cinto", "Acessório na cabeça", "Voa", "Cor da pele", "Arma"];

// Vetor contendo todos os possíveis valores para cada uma das diferentes caracteristicas fisicas de um personagem
var g_valoresAtributosPersonagem = [
    ["Não visível", "Visível"],
    ["Usa", "Não usa"],
    ["M", "F"],
    ["Herói", "Vilão"],
    ["Sim", "Não"],
    ["Sim", "Não"],
    ["Preto", "Amarelo", "Branco", "Vermelho"],
    ["Colorido", "Preto",],
    ["Marvel", "DC"],
    ["Humano", "Alienígena"],
    ["Sim", "Não"],
    ["Usa", "Não usa"],
    ["Sim", "Não"],
    ["Comum", "Colorida"],
    ["Sim", "Não"]
];

// Matriz contendo os indices dos jogadores (referencia aos indices contidos nos nomes dos arquivos)
var g_matrizPersonagens;

// FIM: VARIAVEIS GLOBAIS -----------------------------------------------------------------------------------------------------------------------------------------


// INICIO: FUNÇÕES DO ARQUIVO JOGAR.HTML---------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Capturar e analisar o nível de dificuldade selecionado pelo usuario na página "index.html" e iniciar o jogo. Essa função é a principal, pois chamará as outras.
// Sempre que o jogo começar remove qualquer mensagem enviada para o jogador 2
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function main() {
    let nivelDificuldade = getNivelDificuldade();
    if (nivelDificuldade != null) { // Usuario selecionou o nível de dificuldade na página index.html
        carregarAtributosPersonagens();
        sortearPersonsagens(nivelDificuldade);
        removerItemLocalStorage();
        //alert("Clique sobre uma cartinha para selecionar o seu jogador!");
        setInterval(atualizarMsgJogador1, 100);
        //VencedorTempo1();
    }
}

function atualizarMsgJogador1() {
    var indice = parseInt(localStorage.getItem("g_indiceMsgsJogo"));
    document.getElementById("msgJogador1").innerHTML = g_statusJogo[indice].msgJogador1;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Remover a variavel local que envia uma mensagem para o jogador 2. 
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function removerItemLocalStorage() {
    localStorage.removeItem("msgParaJogador2");
    localStorage.removeItem("Tempo");
    localStorage.removeItem("Vencedor");
    localStorage.removeItem("PontuacaoRank");

}



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Ler o nível de dificuldade selecionado pelo usuario e armazenado na memoria do navegador (localstorage)
// Parâmetro: nenhum
// Retorno: nivel de dificuldade selecionado pelo usuario (0:facil; 1:médio; 2:difícil ou null:caso haja problema)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function getNivelDificuldade() {
    let nivelDificuldade = null;
    if (typeof(Storage) !== "undefined") {
        nivelDificuldade = localStorage.getItem("nivelDificuldade"); // essa informação virá do index.html
        if (nivelDificuldade == null) // a pessoa abriu essa página ao invés da index.html
            alert("Você ainda não selecionou o nível de dificuldade. Volte para a home e selecione-o");
    } else alert("Seu navegador está desatualizado. Atualize-o ou utilize outro para poder jogar");
    return nivelDificuldade;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Carregar todas as características físicas possiveis de um personagem ("Cabelo","Máscara","Gênero","Tipo",etc.) dentro do <select>: "Selecione a característica 
// física do personagem:" localizado na página "jogar.html"
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function carregarAtributosPersonagens() {
    var valorCaractFisica;
    var atributos = Object.keys(g_caractPersonagens[0]); //Retorna todos os atributos de um personagem. Ex: ["carta","nome","cabelo",....]
    for (let i = 0; i < g_atributosPersonagem.length; i++) {
        valorCaractFisica = document.createElement("option");
        valorCaractFisica.text = g_atributosPersonagem[i];
        //valorCaractFisica.name = g_atributosPersonagem[i];
        valorCaractFisica.value = atributos[i + 2];
        document.getElementById("selAtributoPersonagem").appendChild(valorCaractFisica);
    }
    carregarValoresAtributosPersonagem();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Carregar todas os valores de um determinada caracteristica física de um personagem no <select> "Selecione agora o valor da característica física do personagem:"
// Se o usuario selecionar a característica "Cabelo" no select gerado pela função "carregarAtributosPersonagens" será carregado no select gerado por essa função
// os valores ["Não visível", "Visível"], e assim sucessivamente para as demais características físicas.
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function carregarValoresAtributosPersonagem() {
    let indice, atributo, valorAtributo;

    atributo = document.getElementById("selAtributoPersonagem").value;
    indice = Object.keys(g_caractPersonagens[0]).indexOf(atributo) - 2; // Subtraio 2, pois os dois primeiros atributos de g_caractPersonagens são "carta" e "nome", respectivamente

    removerItensSelect("selValorAtributoPersonagem");
    for (let i = 0; i < g_valoresAtributosPersonagem[indice].length; i++) {
        valorAtributo = document.createElement("option");
        valorAtributo.text = g_valoresAtributosPersonagem[indice][i];
        valorAtributo.value = g_valoresAtributosPersonagem[indice][i];
        document.getElementById("selValorAtributoPersonagem").appendChild(valorAtributo);
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Remover todos os itens contidos dentro de uma tag <select> qualquer
// Parâmetro: identificador do <select>
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function removerItensSelect(idSelect) {
    let select = document.getElementById(idSelect);
    while (select.length > 0) select.remove(0);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Gerar a matriz de personagens (aleatoria) contendo a numeração dos personagens conforme os indices contidos nos nomes dos arquivos dos personagens e montar o 
// tabuleiro a partir dessa matriz
// Parâmetro: nivelDificuldade: 0, 1 ou 2 (correspondentes aos níveis: fácil, médio ou difícil)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function sortearPersonsagens(nivelDificuldade) {
    g_matrizPersonagens = gerarMatrizPersonagens(nivelDificuldade);
    montarTabuleiroPersonagens(g_matrizPersonagens);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Gerar uma matriz aleatoria contendo indices. OBS: no nível fácil terá 4 colunas (M) e nos níveis medio e dificil terão
// 6 colunas (M) (sempre 4 colunas (N), independente do nível de dificuldade)
// IMPORTANTE: Nesta matriz serão armazenados os numeros das imagens correspondentes aos personagens. Veja um exemplo abaixo.
// Ex: Nível selecionado: Fácil, portanto serão 4 linhas x 4 colunas. Exemplo de uma matriz aleatória:
// 0: (4) [13, 2, 8, 10]
// 1: (4) [14, 12, 5, 11]
// 2: (4) [15, 7, 6, 16]
// 3: (4) [3, 9, 1, 4]
// Parâmetro: nivelDificuldade: 0, 1 ou 2 (correspondentes aos níveis: fácil, médio ou difícil)
// Retorno: matriz aleatória contendo índices de 1 até N*M
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function gerarMatrizPersonagens(nivelDificuldade) {
    let nroLinhas = 4;
    let vetAleatorio = [];
    let contador = 0;
    let matriz = [];
    let nroColunas;
    if (nivelDificuldade == "0") nroColunas = 4;
    else if ((nivelDificuldade == "1") || (nivelDificuldade == "2")) nroColunas = 6;

    matriz = gerarMatrizBranco(nroLinhas, nroColunas);
    vetAleatorio = gerarVetorAleatorio(nroLinhas * nroColunas);
    for (let i = 0; i < nroLinhas; i++)
        for (let j = 0; j < nroColunas; j++)
            matriz[i][j] = vetAleatorio[contador++];

    return matriz;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Gerar uma matriz em branco contendo nroLinhas(N) x nroColunas(M)
// Parâmetros: nroLinhas: nro de linhas da matriz; nroColunas: nro de colunas da matriz
// Retorno: matriz NxM em branco, onde N=nroLinhas e M=nroColunas
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function gerarMatrizBranco(nroLinhas, nroColunas) {
    matriz = [];
    for (let i = 0; i < nroLinhas; i++)
        matriz[i] = new Array(nroColunas);
    return matriz;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Gerar um vetor contendo números aleatórios de 1 até nroItens
// Parâmetro: nroItens: valor inteiro positivo que corresponderá ao maior número a ser armazenado no vetor (menor valor será sempre 1)
// Retorno: vetor de números aleatórios
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function gerarVetorAleatorio(nroItens) {
    let vetTemp = [];
    let vetAleatorio = [];
    for (let i = 0; i < nroItens; i++) vetTemp[i] = i + 1;
    while (vetTemp.length > 0) {
        indice = sortearNro(0, vetTemp.length - 1);
        valor = vetTemp.splice(indice, 1)[0];
        vetAleatorio.push(valor);
    }
    return vetAleatorio;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Sortear um numero aleatorio no intervalo [a,b]
// Parâmetros: a: limite inferior do intervalo e b: limite superior do intervalo
// Retorno: número aleatório sorteado
// Exemplo de chamada da função: sortear(5,45) -> 30
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function sortearNro(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Colocar cartinhas dos personagens sorteados no tabuleiro, isto é, no corpo da página web
// Parâmetro: matriz: matriz contendo os índices dos personagens (1 até N*M)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function montarTabuleiroPersonagens(matriz) {
    for (let linha = 0; linha < matriz.length; linha++) {
        var boxLinha = document.createElement("div");
        boxLinha.setAttribute("id", "matrizLinha" + linha);
        document.getElementById("tabuleiroEsq").appendChild(boxLinha);
        for (let coluna = 0; coluna < matriz[0].length; coluna++) {
            var imagem = document.createElement("img");
            imagem.setAttribute("src", "cartasJogo/carta" + matriz[linha][coluna] + ".png");
            imagem.setAttribute("width", "100");
            imagem.setAttribute("id", "personagem" + linha + "" + coluna);
            imagem.setAttribute("class", "bordaPadrao");
            imagem.addEventListener("click", () => selecionarPersonagem([linha, coluna]));
            document.getElementById("matrizLinha" + linha).appendChild(imagem);
        }
    }
}
chutar = (valor) => {
    chute = valor;
}

var teste12;
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Selecionar o personagem do jogador 1
// Parâmetro: vetPosicaoPersonagem: vetor contendo dois valores (indices). O primeiro e segundo valores correspondem a linha e coluna da matriz onde se encontra 
// o personagem, respectivamente
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function selecionarPersonagem(vetPosicaoPersonagem) {
    var atributos, valoresAtributos;
    //console.log(vetPosicaoPersonagem[0])
    //console.log(vetPosicaoPersonagem[1])
    valoresAtributos = Object.values(g_caractPersonagens[g_matrizPersonagens[vetPosicaoPersonagem[0]][vetPosicaoPersonagem[1]] - 1]);
    teste12 = valoresAtributos[1];
    // O personagem ja foi escolhido pelo jogador (segundo clique em diante em qualquer cartinha)
    if (g_personagemJogador.length != 0) {
        if (chute == false) {
            document.getElementById("personagem" + vetPosicaoPersonagem[0] + "" + vetPosicaoPersonagem[1]).src = "cartasJogo/carta0.png";
            // O personagem ainda não foi escolhido pelo jogador (primeiro clique dado pelo jogador em qualquer cartinha)
        } else {
            if (localStorage.getItem('Nome jogador 2') == teste12) {
                alert("Acertou!");
                tempoGasto1 = parseInt(localStorage.getItem("Tempo"));
                tempoRodando1 = tempoRodando1 + (soma - tempoGasto1);
                localStorage.setItem("Vencedor", 1);
            } else {
                alert("Errou!");
                localStorage.setItem("Vencedor", 2);
            }
        }
    }
    // O personagem ainda não foi escolhido pelo jogador (primeiro clique dado pelo jogador em qualquer cartinha)
    else {
        var imagem = document.createElement("img");
        imagem.setAttribute("src", "cartasJogo/carta" + g_matrizPersonagens[vetPosicaoPersonagem[0]][vetPosicaoPersonagem[1]] + ".png");
        g_personagemJogador = vetPosicaoPersonagem;
        document.getElementById("personagemSelecionado").appendChild(imagem);
        var lista = document.createElement("ul");
        document.getElementById("personagemSelecionado").appendChild(lista);

        // Exibe TODAS as informacoes do personagem selecionado pelo usuario abaixo da imagem do personagem selecionado
        atributos = Object.keys(g_caractPersonagens[g_matrizPersonagens[vetPosicaoPersonagem[0]][vetPosicaoPersonagem[1]] - 1]);
        valoresAtributos = Object.values(g_caractPersonagens[g_matrizPersonagens[vetPosicaoPersonagem[0]][vetPosicaoPersonagem[1]] - 1]);
        localStorage.setItem('Nome jogador 1', valoresAtributos[1])
        for (let i = 1; i < atributos.length; i++) {
            var itemLista = document.createElement("li");
            itemLista.appendChild(document.createTextNode(atributos[i] + ": " + valoresAtributos[i]));
            lista.appendChild(itemLista)
        }
        atualizarMsgJogadores();

    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Verificar se há algum personagem no tabuleiro que contém correspodência com a característica física selecionada
// Parâmetro: resposta: sim ou nao em relação ao atributo/valor selecionado pelo jogador no select de atributo/valor
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function checarCaractJogadores(resposta) {
    let atributoSelecJogador = document.getElementById("selAtributoPersonagem");
    let valorAtributoSelecJogador = document.getElementById("selValorAtributoPersonagem");
    var indice, atributos, valoresAtributos;

    for (let linha = 0; linha < g_matrizPersonagens.length; linha++) {
        for (let coluna = 0; coluna < g_matrizPersonagens[0].length; coluna++) {
            atributos = Object.keys(g_caractPersonagens[g_matrizPersonagens[linha][coluna] - 1]);
            valoresAtributos = Object.values(g_caractPersonagens[g_matrizPersonagens[linha][coluna] - 1]);
            indice = atributos.indexOf(atributoSelecJogador.value)
            if (resposta == "sim") {
                if (valoresAtributos[indice] != valorAtributoSelecJogador.value)
                    document.getElementById("personagem" + linha + "" + coluna).style.border = "5px solid rgb(237, 206, 20)";
            } else {
                if (valoresAtributos[indice] == valorAtributoSelecJogador.value)
                    document.getElementById("personagem" + linha + "" + coluna).style.border = "5px solid rgb(237, 206, 20)";
            }
        }
    }
    if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 0) {
        g_cronometro = setTimeout(retirarBordaTemporaria, 15000);
    } else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 1) {
        g_cronometro = setTimeout(retirarBordaTemporaria, 10000);
    } else if (nivelDificuldade = localStorage.getItem("nivelDificuldade") == 2) {
        g_cronometro = setTimeout(retirarBordaTemporaria, 5000);
    }


    document.getElementById('passarVez').disabled = false;

}

//quando clicar em passar a vez, vai atualizar as mensagens
passarVez1 = () => {
        atualizarMsgJogadores();
        document.getElementById('passarVez').disabled = true;
    }
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retirar bordas de todos os personagens do tabuleiro
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function retirarBordaTemporaria() {
    for (let linha = 0; linha < g_matrizPersonagens.length; linha++)
        for (let coluna = 0; coluna < g_matrizPersonagens[0].length; coluna++)
            document.getElementById("personagem" + linha + "" + coluna).style.border = "none";
    // document.getElementById("personagem" + linha + "" + coluna).style.border = "5px solid white";
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retirar bordas de todos os personagens do tabuleiro e encerrar o cronômetro
// Parâmetro: nenhum
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function pararMostrarBorda() {
    retirarBordaTemporaria();
    clearTimeout(g_cronometro);
}

// FIM: FUNÇÕES DO ARQUIVO JOGAR.HTML---------------------------------------------------------------------------------------------------------------------------

var final1 = setInterval(() => {

    if (localStorage.getItem("Tempo") != 0 && localStorage.getItem("Vencedor") == null) {
        document.getElementById('tempoRespostaPainelJogador1').innerHTML = localStorage.getItem("Tempo");

    } else {
        var Vencedor = localStorage.getItem("Vencedor");
        if (Vencedor == 1) {
            document.getElementById('tempoRespostaPainelJogador1').innerHTML = "Venceu!";
            reiniciar1();

        } else if (Vencedor == 2) {
            document.getElementById('tempoRespostaPainelJogador1').innerHTML = "Perdeu!";
            reiniciar1();
        }
    }

}, 100)



function reiniciar1() {
    clearInterval(final1);
    if (localStorage.getItem("Vencedor") == 1) {
        ranking();
        setTimeout(() => { window.open("registro.html", "_self"); localStorage.removeItem("Vencedor"); }, 5000);
    }
    else {
        setTimeout(() => { window.close(); localStorage.removeItem("Vencedor"); }, 5000);
    }
}


setInterval(PassarVez2, 1000);

// função para desabilitar e habilitar botões 

function PassarVez2() {
    vez = parseInt(localStorage.getItem("g_indiceMsgsJogo"));

    if (vez % 2 != 0) {

        document.getElementById('chuteJogador1').disabled = true;
        document.getElementById('perg1').disabled = true;
    } else {

        if (vez == 0 || vez == 4 || vez == 6) {
            if (vez == 4) {
                document.getElementById('chuteJogador1').disabled = false;
                document.getElementById('perg1').disabled = true;
            } else {
                document.getElementById('chuteJogador1').disabled = true;
                document.getElementById('perg1').disabled = true;
            }
        } else {
            document.getElementById('chuteJogador1').disabled = false;
            document.getElementById('perg1').disabled = false;
        }

    }
}


setInterval(monitorarMsg2, 1000);

function monitorarMsg2() {
    var msg = localStorage.getItem("msgParaJogador1");
    if (msg != null) {
        document.getElementById("perguntaJogador1").innerHTML = msg;
        document.getElementById("boxPerguntaJogador1").className = "visivel";
    } else {
        document.getElementById("boxPerguntaJogador1").className = "invisivel";
    }
}