import { getTabuleiro, mover, condicaoVitoria} from "./pecas.js";

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

    if(condicaoVitoria())
    {
        const telaVitoria = criarTelaVitoria();
        jogo.append(telaVitoria);
        return;
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
    const jpeca = Number(e.target.dataset.posicaoY);

    //ultimo peça prox vazio (dentro das condições: dist) --> troca e remove o do meio
    mover(aux[0],  aux[1], ipeca ,jpeca);
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

function criarTelaVitoria()
{
    const telaVitoria = document.createElement("div");
    telaVitoria.setAttribute("id", "vitoria");
    telaVitoria.textContent = "Parabéns, você venceu!";
    return telaVitoria;
}