let colores = [];
for (let i = 0; i < 15; i++) {
    colores.push(i);
    colores.push(i);
}

colores.sort(() => Math.random() - 0.5);

const tablero = document.getElementById("tablero");

tablero.style.display = "grid";
tablero.style.gridTemplateColumns = "repeat(6, 60px)";
tablero.style.gridGap = "10px";

let primera = null;
let bloqueado = false;
let parejas = 0;
let inicio = Date.now();

colores.forEach(color => {

    let carta = document.createElement("div");

    carta.style.width = "50px";
    carta.style.height = "50px";
    carta.style.background = "gray";
    carta.style.display = "inline-block";
    carta.style.margin = "5px";

    carta.onclick = function () {

        if (bloqueado || carta === primera) return;

        carta.style.background = "hsl(" + color * 20 + ", 100%, 50%)";

        if (!primera) {
            primera = carta;
        } else {
            bloqueado = true;

            if (primera.style.background === carta.style.background) {
                parejas++;
                primera = null;
                bloqueado = false;
            } else {
                setTimeout(() => {
                    carta.style.background = "gray";
                    primera.style.background = "gray";
                    primera = null;
                    bloqueado = false;
                }, 500);
            }
        }

        if (parejas === 15) {
            let tiempoTotal = Math.floor((Date.now() - inicio) / 1000);
            document.getElementById("tiempo").textContent =
                "Tiempo empleado: " + tiempoTotal + " segundos";
        }
    };

    tablero.appendChild(carta);
});