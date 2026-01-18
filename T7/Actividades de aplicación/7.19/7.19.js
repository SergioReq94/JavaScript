const miImagen = document.getElementById("miImagen");
const placeholder = document.getElementById("placeholder");

window.addEventListener("keydown", (event) => {

    if (event.key >= '0' && event.key <= '9') {

            console.log(`Cargando imagen número: ${event.key}`);
            miImagen.style.display = "none";
            placeholder.style.display = "block";
            miImagen.src = `img/${event.key}.jpg`;
            placeholder.textContent = `Cargando imagen número: ${event.key}...`;
            miImagen.onload = () => {
                placeholder.style.display = "none";
                miImagen.style.display = "block";
            };
    }
});