function addFila(){
    const tabla = document.getElementById("tabla");
    const nuevaFila = document.createElement("tr");
    const celda = document.createElement("td");
    const texto = document.createTextNode("5. Adri");

    celda.appendChild(texto);
    nuevaFila.appendChild(celda);
    tabla.appendChild(nuevaFila);
}

addFila();