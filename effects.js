const img = document.getElementById('leonardo-img');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Ajusta a posição da imagem com base na rolagem
    img.style.transform = `translateY(${scrollY}px)`;

    // Adiciona um efeito de bounce
    img.style.transition = 'transform 0.1s ease';
    img.style.transform += ' translateY(-10px)'; // Ajuste a altura do bounce
    setTimeout(() => {
        img.style.transform = `translateY(${scrollY}px)`; // Volta para a posição original
    }, 100);
});
