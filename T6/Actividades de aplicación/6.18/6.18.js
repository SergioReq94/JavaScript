function addFila() {
    const tabla = document.getElementById("tabla");
    const nuevaFila = document.createElement("tr");

    const nombres = ["Adri", "Juan", "Pepe", "Ana"];

    nombres.forEach(nombre => {
        const celda = document.createElement("td");
        const texto = document.createTextNode(nombre);
        celda.appendChild(texto);
        nuevaFila.appendChild(celda);
    });

    tabla.appendChild(nuevaFila);
}

addFila();