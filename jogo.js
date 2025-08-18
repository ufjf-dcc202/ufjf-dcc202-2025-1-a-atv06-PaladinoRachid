import { getTabuleiro, mover } from "./pecas.js";

const jogo = document.querySelector('#jogo');

//variavel que guardará as posições da ultima "peça" clicada, começa com um nulo
const aux = [0,0];


atualizarTabuleiro();

function atualizarTabuleiro() 
{
    const tabuleiroAntigo = document.querySelector('.tabuleiro');

    if (tabuleiroAntigo) 
    {
        jogo.removeChild(tabuleiroAntigo);
    }

    const tabuleiroModel = getTabuleiro();

    const eTabuleiro = criarTabuleiro();    
    //preciso mudar aqui
    for (let i = 0; i < tabuleiroModel.length; i++)
    {
        for(let j = 0; j < tabuleiroModel.length; j++)
        {
            const pecinha = criarPecinha(tabuleiroModel[i][j], i + 1, j + 1);
            eTabuleiro.append(pecinha);
            pecinha.addEventListener('click', onClickPecinha);
        }
    }
    
    jogo.append(eTabuleiro);
}

//mudar aqui
function onClickPecinha(e) {
    const ipeca = Number(e.target.dataset.posicaoX);
    const jpeca = Number(e.target.dataset.posicaoX);
    mover(ipeca, jpeca, aux[0], aux[1]);
    aux[0] = ipeca;
    aux[1] = jpeca;

    atualizarTabuleiro();
}


function criarTabuleiro() 
{
    const tabuleiro = document.createElement('div');
    tabuleiro.classList.add('tabuleiro');

    return tabuleiro;
}

function criarPecinha(tipo, posicaoX, posicaoY) 
{
    const novaPecinha = document.createElement('div');
    novaPecinha.classList.add('pecinha');
    novaPecinha.dataset.tipo = tipo;
    novaPecinha.dataset.posicaoX = posicaoX - 1;
    novaPecinha.dataset.posicaoY = posicaoY - 1;
    novaPecinha.style.gridColumn = posicaoX;
    novaPecinha.style.gridRow = posicaoY;

    return novaPecinha;
}