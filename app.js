alert('Boas vindas ao jogo número secreto');
let numerMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numerMaximo + 1);
console.log('numeroSecreto');
let chute;
let tentativas = 1;

//enquanto o chute não for igual ao NumeroSecreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numerMaximo}`);
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;        
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        }
        else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens, você acertou o numero ${numeroSecreto}!!. Com ${tentativas} ${palavraTentativa}.`);

/*
if(tentativas > 1){
    alert(`Parabens, você acertou o numero ${numeroSecreto}!!. Com ${tentativas} tentavivas.`);
}
else{
    alert(`Parabens, você acertou o numero ${numeroSecreto}!!. Com ${tentativas} tentaviva.`);
}*/
