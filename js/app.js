


let jogosAlugados = 0;


function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
   

   
    if (imagem.classList.contains('dashboard__item__img--rented')) // Verifica se o filme está alugado
    {
        imagem.classList.remove('dashboard__item__img--rented');  // Se o filme estiver alugado, remove a condição de alugado
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent= 'Alugar';
        jogosAlugados--;
    }
    else
    {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent= 'Devolver';
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});