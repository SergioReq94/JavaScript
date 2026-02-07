const cargaDOM = new Promise((resolve) => {
    if (document.readyState === 'loading') {
        console.log("CARGANDO...");
        document.addEventListener('DOMContentLoaded', () => resolve("LISTO PARA ACTUAR"));
    } else {
        resolve("LISTO PARA ACTUAR");
    }
});

cargaDOM.then(mensaje => console.log(mensaje));