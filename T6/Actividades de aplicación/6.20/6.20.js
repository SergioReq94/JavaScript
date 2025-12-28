function listaIngredientes() {
    const lista = document.createElement('ul');
    document.body.appendChild(lista);
    let ingrediente;

    do {
        ingrediente = prompt("Introduce un ingrediente (Pulsa Cancelar para salir):");
        if (ingrediente !== null && ingrediente.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            lista.appendChild(li);
        }
    } while (ingrediente !== null);
}