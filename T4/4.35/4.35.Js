function lanzamientoDados(numLanzamientos) {
    let puntuacionGanadora = 0;
    let lanzamientoGanador = 0;

    for (let i = 0; i < numLanzamientos; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const puntuacionActual = dado1 + dado2;

        if (puntuacionActual > puntuacionGanadora) {
            puntuacionGanadora = puntuacionActual;
            lanzamientoGanador = i + 1; 
        }
    }

    console.log(`Se realizaron ${numLanzamientos} lanzamientos.`);
    return puntuacionGanadora;
}

const maxPuntuacion = lanzamientoDados(20);
console.log("Puntuación más alta obtenida:", maxPuntuacion); 