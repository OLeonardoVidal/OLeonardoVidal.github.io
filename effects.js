const img = document.getElementById('leonardo-img');

function moveImage() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    img.style.position = 'absolute';
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
}

// Move the image every 2 segundos
setInterval(moveImage, 2000);
