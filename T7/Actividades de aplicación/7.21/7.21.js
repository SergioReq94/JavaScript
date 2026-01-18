const lista = document.getElementById('miLista');
const btn = document.getElementById('addBtn');

btn.onclick = () => {
const texto = prompt("Introduce datos:");
    if (texto) {
        const li = document.createElement('li');
        li.innerHTML = `${texto} <span class="borrar" style="cursor:pointer; color:red; margin-left:10px;">X</span>`;
        lista.appendChild(li);
    }
};

lista.onclick = (e) => {
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.remove();
    }
};