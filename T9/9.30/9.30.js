let enlaceClicado = false;

const detectarPatron = new Promise((resolve) => {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            enlaceClicado = true;
            console.log("Enlace pulsado... esperando tecla [G]");
        }
    });

    document.addEventListener('keydown', (e) => {
        if (enlaceClicado && e.key.toLowerCase() === 'g') {
            resolve("¡Patrón detectado!");
        }
    });
});

detectarPatron.then(res => alert(res));