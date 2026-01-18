const log = document.getElementById('log');
const clear = document.getElementById('clear');

window.addEventListener('keydown', (e) => {

    if (e.key.length === 1) {
        log.innerText += e.key;
    }
});

clear.onclick = () => log.innerText = "";