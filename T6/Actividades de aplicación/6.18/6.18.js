function addFila() {
    const tabla = document.getElementById("tabla");
    let cont = document.getElementById("contenido").vuale;

    const nuevaFila = document.createElement("tr");
    const celda = document.createElement("td");
    const texto = document.createTextNode("5. Adri");

    celda.appendChild(texto);
    nuevaFila.appendChild(celda);
    tabla.appendChild(nuevaFila);
}


document.getElementById("boton").addEventListener(click, addFila());