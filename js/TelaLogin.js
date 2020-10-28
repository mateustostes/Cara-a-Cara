function tocarAudio(idAudio) {
    document.getElementById(idAudio).play();
}

function pararAudio(idAudio) {
    document.getElementById(idAudio).pause();
    document.getElementById(idAudio).currentTime = 0;
}

function pararMusicaTema() {
    document.getElementById("musicaTema").pause();
}



function TelaLogin() {
    this.idade = 1
    setInterval(() => {
        document.getElementById('TelaLogin').style.backgroundImage = `url("img/avatar${this.idade}.png")`;
        this.idade++
        if (this.idade == 6) {
            this.idade = 1;
        }

    }, 1000)
}

new TelaLogin



function teste1(audioSenha) {

    let sons = [];
    for (let i = 1; i < 18; i++) {
        sons[i] = i + 1;
    }

    novoSom = Math.floor(Math.random() * 17 + 1);
    document.getElementById('audioSenha').src = `sons/${novoSom}.mp3`;

    document.addEventListener('keydown', function (e) {

        document.getElementById('audioSenha').play();

    });
}



