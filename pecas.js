// aqui nosso tabuleiro é 7x7, com um espaço vazio no centro e bordas 'nulas'
const tabuleiro = [
  ['', '', 'p', 'p', 'p', '', ''],
  ['', '', 'p', 'p', 'p', '', ''],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['p', 'p', 'p', 'v', 'p', 'p', 'p'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', 'p', 'p', 'p', '', ''],
  ['', '', 'p', 'p', 'p', '', ''],
];

function trocar(origem, destino) {

    if (tabuleiro[origem] === '') return;
    if (tabuleiro[destino] !== '') return;

    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = '';
}

export function mover(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB) { 
    const pecinhaA = tabuleiro[iPecinhaA][jPecinhaA];
    const pecinhaB = tabuleiro[iPecinhaB][jPecinhaB];   
    
    if (pecinhaA === 'p') {
        if (pecinhaB === 'v' && disanciaValida((iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB)){
            trocar(iPecinhaA, iPecinhaB);
        }
        else {
            trocar(iPecinha, iPecinha + 1);
        }
        return;
    }

    if (tabuleiro[iPecinha] === 'p') {
        if (tabuleiro[iPecinha - 1] !== '') {
            trocar(iPecinha, iPecinha - 2);
        }
        else {
            trocar(iPecinha, iPecinha - 1);
        }
        return;
    }
}
function distanciaValida(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB)
{
    if( || )
        return true;
    return false;
}
export function getTabuleiro() {
    return structuredClone(tabuleiro);
}