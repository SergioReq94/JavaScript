function ordenarLista() {
    const lista = document.getElementById("miLista");
    
    const items = Array.from(lista.getElementsByTagName("li"));

    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    lista.innerHTML = "";

    items.forEach(li => {
        lista.appendChild(li);
    });
}