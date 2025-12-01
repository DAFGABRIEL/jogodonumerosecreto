    let listaNumerosSorteados = [];
    ExibirMensagem();

    let maxNumeroSecreto = 10;
    let tentativas = 1;
    let numeroEscolhido;

    gerarNumeroSecreto();
    console.log(numeroEscolhido);
    
    function ExibirMensagem(){  
        frases('h1', 'Jogo do número secreto');
        frases('p', 'Escolha um número entre 1 a 10');
}

    function frases(campo, frase){  
        let vari = document.querySelector(campo);
        vari.innerHTML = frase;
        responsiveVoice.speak(frase, 'Brazilian Portuguese Female', {rate: 1.2});
}

    function gerarNumeroSecreto(){  
        numeroEscolhido = parseInt(Math.random()*maxNumeroSecreto + 1);
        let quantidadeElementos = listaNumerosSorteados.length;
        if(quantidadeElementos == maxNumeroSecreto){
            listaNumerosSorteados = [];
        }
        if (listaNumerosSorteados.includes(numeroEscolhido)){
           return gerarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }
}

    function verificarChute(){
        let chute = document.querySelector('input').value;
            if (numeroEscolhido == chute){
                let titulo = document.querySelector('h1').innerHTML;
            if (titulo === 'Você errou!') {
                frases('h1', 'Jogo do número secreto');
            }
        let tentativasp = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou em ${tentativas} ${tentativasp}`;
        frases('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                frases('h1', 'Você errou!');
                limparCampo();
            if(numeroEscolhido > chute){
                frases('p', 'Número secreto é maior!');
            } else{
                frases('p', 'Número secreto é menor!');
            }
        tentativas++;
}
}

    function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}

    function gerarNovoJogo(){
        ExibirMensagem();
        gerarNumeroSecreto();
        tentativas = 1;
        limparCampo();
        document.getElementById('reiniciar').setAttribute('disabled',true);
}