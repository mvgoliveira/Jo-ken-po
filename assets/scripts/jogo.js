var escolhaJogador = 0;
var jogadas = 1;

var playerPonto = 0;
var InimigoPonto = 0;

var opc = ["Pedra", "Papel", "Tesoura"];

document.getElementById('confirmar').disabled = true;

function selecionar(escolha) {

    document.getElementById('opc1').style.opacity = 0.5;
    document.getElementById('opc2').style.opacity = 0.5;
    document.getElementById('opc3').style.opacity = 0.5;

    escolhaJogador = escolha;

    document.getElementById('opc' + String(escolhaJogador)).style.opacity = 1;

    document.getElementById('confirmar').style.cursor = "pointer"; 
    document.getElementById('confirmar').style.background = "#419A5C"; 
    document.getElementById('confirmar').disabled = false;

    document.getElementById('escolha').textContent = ("SUA ESCOLHA: " + String(opc[escolha-1]))

}

function jogar() {

    jogadas++;

    escolhaComputador = Math.floor((Math.random() * (3 - 1 + 1)) + 1);

    document.getElementById('escolhaInimigo').src = './assets/svg/' + String(escolhaComputador) + '-inimigo.svg';

    document.getElementById('rodada').textContent = ("rodada " + String(jogadas));

    if (escolhaJogador == escolhaComputador) {
        resultado(0);
    } else {
        if (((escolhaJogador - 1) == escolhaComputador) && (escolhaJogador != 1)){
            playerPonto++;
            resultado(1);
        } else {
            if (((escolhaJogador + 2) == escolhaComputador) && (escolhaJogador == 1)) {
                playerPonto++;
                resultado(1);
            } else {
                InimigoPonto++;
                resultado(2);
            }
        }
    }

    document.getElementById('playerPonto').textContent = ("Pontos: " + String(playerPonto));
    document.getElementById('inimigoPonto').textContent = ("Pontos: " + String(InimigoPonto));

}

function resultado(valor) {

    switch (valor) {
        case 0:
            document.getElementById('popupimg').style.display = "grid";
            document.getElementById('popupimg').src = "./assets/img/empate.jpg";
            document.getElementById('popupexit').dataset.content = 'x';
            document.getElementById('popupmsg').style.color = "#111";
            document.getElementById('popupmsg').textContent = ("Empatou!")
            break;
    
        case 1:
            document.getElementById('popupimg').style.display = "grid";
            document.getElementById('popupimg').src = './assets/img/win.jpg';
            document.getElementById('popupexit').dataset.content = 'x';
            document.getElementById('popupmsg').style.color = "#fff";
            document.getElementById('popupmsg').textContent = ("Ganhou!")
            break;

        case 2:
            document.getElementById('popupimg').style.display = "grid";
            document.getElementById('popupimg').src = "./assets/img/defeat.jpg";
            document.getElementById('popupexit').dataset.content = 'x';
            document.getElementById('popupmsg').style.color = "#fff";
            document.getElementById('popupmsg').textContent = ("Perdeu!")
            break;

        default:
            break;
    }
}

function apagar() {
    document.getElementById('popupimg').style.display = "none";
    document.getElementById('popupexit').dataset.content = '';
    document.getElementById('popupmsg').textContent = '';
}