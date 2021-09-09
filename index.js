let humano = 0;
let pontosHumano = 0;
let maquina = 0;
let pontosMaquina = 0;
let vencedor = 0;

function jogar(comeca) {
    humano = comeca;
    maquina = Math.floor(Math.random() * (3 - 1 + 1));

    if((humano == 1) && (maquina == 1)) {
        vencedor = 0;
    } else if((humano) == 1 && (maquina == 2)) {
        vencedor = 2;
    }else if((humano == 1) && (maquina == 3)) {
        vencedor = 1;
    }else if((humano == 2) && (maquina == 2)) {
        vencedor = 0;
    } else if((humano == 2) && (maquina == 1)) {
        vencedor = 1;
    }else if((humano == 2) && (maquina == 3)) {
        vencedor = 2;
    }else if((humano == 3) && (maquina == 3)) {
        vencedor = 0;
    } else if((humano == 3) && (maquina == 1)) {
        vencedor = 2;
    }else((humano == 3) && (maquina == 2)) {
        vencedor = 1;
    }
    placar();
}

function placar() {
    if(vencedor == 0) {
        document.getElementById("msg").innerText = "Os Jogadores Empataram!";
    }else if(vencedor == 1) {
        document.getElementById("msg").innerText = "Humano Venceu!";
        pontosHumano++;
    }else if(vencedor == 2) {
        document.getElementById("msg").innerText = "Maquina Venceu!";
        pontosMaquina++;
    }
    document.getElementById('placarjogador').innerText = pontosHumano;
    document.getElementById('placarcomputador').innerText = pontosMaquina;
}
