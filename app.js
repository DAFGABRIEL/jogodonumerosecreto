alert('Jogo de acertar o número');
let maxNumeroSecreto = 1000;
let numeroSecreto = parseInt(Math.random()*maxNumeroSecreto + 1);
console.log(numeroSecreto);
let numero;
let tentativas = 0;
let tentativasp = "";

while(numero != numeroSecreto){
    numero = prompt(`Digite um numero entre 1 e ${maxNumeroSecreto}`);
    tentativas++;
if(numero > numeroSecreto){
    alert(`o numero secreto é menor que ${numero}`);
}
else if(numero < numeroSecreto){
    alert(`o numero secreto é maior que ${numero}`);
}
else if (numero == numeroSecreto){
tentativasp = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`acertou, o número ${numeroSecreto} em ${tentativas} ${tentativasp}`);
    break;
}
}