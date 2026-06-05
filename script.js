// Seleciona o botão real
const button = document.getElementById('animatedButton');

// Adiciona um listener para o clique
button.addEventListener('click', () => {
    // Muda temporariamente o texto para "Clicked!" e muda a cor
    const originalText = button.innerText;
    button.innerText = 'Clicked!';
    button.style.color = '#0ff0b3'; // Muda para ciano

    // Reseta o texto após 1 segundo
    setTimeout(() => {
        button.innerText = originalText;
        button.style.color = '#FFFFFF';
    }, 1000);
});
