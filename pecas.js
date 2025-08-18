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
    //não podem ser posições nulas
    if (tabuleiro[origem] === '') return;
    if (tabuleiro[destino] !== '') return;
    //onde estava vazio fica a peça; e onde estava a peça fica vazio
    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = 'v';
}

export function mover(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB) {
    //nome provisorio, para funcionar a é peça e b esta vazio 
    const pecinhaA = tabuleiro[iPecinhaA][jPecinhaA];
    const pecinhaB = tabuleiro[iPecinhaB][jPecinhaB];   

    //validações 

    //determina a direção, horizontal ou vertical
    const direcao = decideDirecao(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB);
    // erro no calculo da direcao implica movimento invalido
    if(direcao === "invalido")
        return;
    //calcula o sentido do movimento (esquerda, direita, baixo, cima)
    const sentido = deciodeSentido(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB, direcao);
    // verifica se a distancia entre as duas posições é 2
    const distanciaValida = distanciaValida(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB, direcao);
    //distancia invalida implica movimento invalido 
    if(!distanciaValida)
        return;
    // verifica se tem uma peça entre as duas posições
    const meioValida = validaMeio(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB, direcao, sentido);
    //se não tiver, movimento é invalido
     if(!meioValida)
        return;
    
    
    if (pecinhaA === 'p') {
        if (pecinhaB === 'v'){
            trocar(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB);
        }
    }
}


function decideDirecao(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB)
{
    if(iPecinhaA === iPecinhaB)
        return "horizontal";
    if(jPecinhaA === jPecinhaB)
        return "vertical";
    return "invalido";

}

function distanciaValida(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB, direcao)
{
    // se horizontal
    if(direcao === "horizontal")
    {
        // valido se distancia = 2
        if( Math.abs(jPecinhaA-jPecinhaB) === 2)
            return true;
        else
            return false;

    }
    //senao, é vertical
    else
    {
         if(Math.abs(iPecinhaA-iPecinhaB) === 2)
            return true;
        else
            return false;
    }
}

function validaMeio(iPecinhaA, jPecinhaA, direcao, sentido)
{
    if(direcao === "horizontal")
    {
        if(sentido === "esquerda")
        {
            if(tabuleiro[iPecinhaA][jPecinhaA-1] === "p")
                return true;
            else
                return false;
        }
        else
        {
            if(tabuleiro[iPecinhaA][jPecinhaA+1] === "p")
                return true;
            else
                return false;
        }    
    }
    //vertical
    else
    {
        if(sentido === "baixo")
        {
             if(tabuleiro[iPecinhaA-1][jPecinhaA] === "p")
                return true;
            else
                return false;
        }
        else
        {
            if(tabuleiro[iPecinhaA+1][jPecinhaA] === "p")
                return true;
            else
                return false;
        }   
    }    
}

function deciodeSentido(iPecinhaA, jPecinhaA, iPecinhaB, jPecinhaB, direcao )
{
    // se horizontal
    if(direcao === "horizontal")
    {
        // valido se distancia = 2
        if( jPecinhaA > jPecinhaB)
            return "esquerda";
        else
            return "direita";
    }
    //senao, é vertical
    else
    {
         if(iPecinhaA > iPecinhaB)
            return "baixo";
        else
            return "cima";
    }
}




export function getTabuleiro() {
    return structuredClone(tabuleiro);
}