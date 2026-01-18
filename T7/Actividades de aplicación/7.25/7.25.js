let anchoVerde = 10;
let anchoRojo = 10;
let terminado = false;

const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");
const mensaje = document.getElementById("mensaje");

document.addEventListener("keydown", function(e) {

    if (terminado) return;

    if (e.key === "a") {
        anchoVerde += 5;
        verde.style.width = anchoVerde + "px";
    }

    if (e.key === "ñ") {
        anchoRojo += 5;
        rojo.style.width = anchoRojo + "px";
    }

    if (anchoVerde >= 500) {
        mensaje.textContent = "GANA VERDE";
        terminado = true;
    }

    if (anchoRojo >= 500) {
        mensaje.textContent = "GANA ROJO";
        terminado = true;
    }
});