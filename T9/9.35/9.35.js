document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('coffee-grid');

    for (let i = 0; i < 9; i++) {
        const card = document.createElement('div');
        card.style.border = "1px solid #444";
        card.innerHTML = `<h4>Producto ${i+1}</h4><p>Pura cafeína.</p><b>4.20€</b><br>`;
        grid.appendChild(card);

        fetch('https://coffee.alexflipnote.dev/random.json')
            .then(r => r.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.file;
                img.style.width = "100%";
                card.prepend(img);
            });
    }
});