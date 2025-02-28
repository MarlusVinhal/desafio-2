// Adiciona um evento de clique ao botão com id "magicButton"
document.getElementById("magicButton").addEventListener("click", function() {

    // Obtém a referência da div onde os efeitos serão adicionados
    let effectContainer = document.getElementById("effectContainer");

    // Cria um novo elemento "div" para representar um círculo
    let circle = document.createElement("div");

    // Adiciona a classe "circle" ao novo elemento para aplicar os estilos CSS
    circle.classList.add("circle");

    // Define um tamanho aleatório para o círculo entre 20px e 70px
    let size = Math.random() * 50 + 20;

    // Define a posição aleatória dentro da tela, garantindo que o círculo não saia da área visível
    let x = Math.random() * (window.innerWidth - size);
    let y = Math.random() * (window.innerHeight - size);

    // Gera uma cor aleatória no formato HSL para o círculo
    let color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    // Aplica os estilos CSS dinâmicos ao círculo
    circle.style.width = size + "px";   // Define a largura
    circle.style.height = size + "px";  // Define a altura
    circle.style.left = x + "px";       // Define a posição horizontal
    circle.style.top = y + "px";        // Define a posição vertical
    circle.style.backgroundColor = color; // Aplica a cor de fundo
    circle.style.position = "absolute"; // Define a posição absoluta para posicionamento livre

    // Adiciona o círculo ao "effectContainer"
    effectContainer.appendChild(circle);

    // Define um temporizador para remover o círculo após 2 segundos com efeito de transição
    setTimeout(() => {
        circle.style.opacity = "0";  // Faz o círculo desaparecer gradualmente
        circle.style.transform = "scale(2)"; // Aumenta o tamanho antes de sumir
        setTimeout(() => circle.remove(), 1000); // Remove o círculo após 1 segundo
    }, 2000);
});

// Exibe uma mensagem no console para indicar que o código está rodando corretamente
console.log("Código atualizado e rodando!");
