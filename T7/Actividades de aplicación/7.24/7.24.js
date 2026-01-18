const p = document.getElementById('miParrafo');
const contenedorBtns = document.getElementById('botones');
const vocales = ['a', 'e', 'i', 'o', 'u'];

vocales.forEach(v => {
const btn = document.createElement('button');
    btn.innerText = v.toUpperCase();
    btn.onclick = () => {
        const regex = new RegExp(`[${v}${v.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}]`, 'gi');
        const regexSimple = new RegExp(v, 'gi');
        p.innerText = p.innerText.replace(regexSimple, "");
    };
    contenedorBtns.appendChild(btn);
});