"use strict";

const inputImagem = document.getElementById('input'); // campo de entrada de texto (input)
const botaoRandom = document.getElementById('random');

function trocarFundo() {
    const input = document.getElementById('input').value

    if(input.toLowerCase() === 'primavera'){
         document.body.style.backgroundImage = "url('./img/primavera.webp')"
    }else if(input.toLowerCase() === 'verão' || input.toLowerCase() === 'verao'){
        document.body.style.backgroundImage = "url('./img/verao.jpg')"
    }else if(input.toLowerCase() === 'outono'){
        document.body.style.backgroundImage = "url('./img/outono.jpg')"
    }else if(input.toLowerCase() === 'inverno'){
        document.body.style.backgroundImage = "url('./img/inverno.jpg')"
    }else if(input.toLowerCase() === 'galaxia'){
        document.body.style.backgroundImage = "url('./img/galaxia.jpg')"
    }
}

function randomizarFundo(){
    const imagens = [
        "url('./img/primavera.webp')",
        "url('./img/verao.jpg')",
        "url('./img/outono.jpg')",
        "url('./img/inverno.jpg')",
        "url('./img/galaxia.jpg')"
    ];
    const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)]
    document.body.style.backgroundImage = imagemAleatoria
}



inputImagem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // previne o comportamento padrão (por exemplo, submit de formulário)
        trocarFundo();
    }
});

botaoRandom.addEventListener('click', randomizarFundo)

