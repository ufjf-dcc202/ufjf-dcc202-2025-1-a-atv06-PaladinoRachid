import { getTabuleiro, mover } from "./discos.js";

const jogo = document.querySelector('#jogo');


atualizarTabuleiro();

function atualizarTabuleiro() {

    const tabuleiroAntigo = document.querySelector('.tabuleiro');

    if (tabuleiroAntigo) {
        jogo.removeChild(tabuleiroAntigo);
    }

    const tabuleiroModel = getTabuleiro();

    const eTabuleiro = criarTabuleiro();    
    
    for (let i = 0; i < tabuleiroModel.length; i++) {
        const pecinha = criarPecinha(tabuleiroModel[i], i + 1);
        eTabuleiro.append(pecinha);
        pecinha.addEventListener('click', onClickPecinha);
    }
    
    jogo.append(eTabuleiro);
}

function onClickPecinha(e) {
    const peca = Number(e.target.dataset.posicao);
    mover(peca);
    atualizarTabuleiro();
}


function criarTabuleiro() {
    const tabuleiro = document.createElement('div');
    tabuleiro.classList.add('tabuleiro');

    return tabuleiro;
}

function criarPecinha(cor, posicao) {
    const novaPecinha = document.createElement('div');
    novaPecinha.classList.add('pecinha');
    novaPecinha.dataset.cor = cor;
    novaPecinha.dataset.posicao = posicao - 1;
    novaPecinha.style.gridColumn = posicao;

    return novaPecinha;
}