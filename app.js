const numeroMaximo = (10);
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial()
{
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Escolha um número entre 0 e ${numeroMaximo}`);
}

exibirMensagemInicial();

function verificarChute()
{   
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto)
    {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela("h1","Você acertou!");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    {
        exibirTextoNaTela("h1", "Você errou!");
        tentativas++;
        limparCampo();
        if(chute > numeroSecreto)
        {
            exibirTextoNaTela("p", "O número secreto é menor.");
        }
        else
        {
            exibirTextoNaTela("p", "O número secreto é maior.");
        }
    }
    
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = (Math.round(Math.random()*numeroMaximo));
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == (numeroMaximo+1))
    {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);        
        return numeroEscolhido;
        
    }
    
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
/*Removendo o último elemento
Para remover o último elemento, você pode usar o método pop.

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]*/