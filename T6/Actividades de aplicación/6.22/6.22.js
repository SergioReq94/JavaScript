function crearCookie() {
    const nombre = prompt("Introduce tu nombre:");
    const edad = prompt("Introduce tu edad:");
    const minutos = 30;
    const fecha = new Date();
    
    fecha.setTime(fecha.getTime() + (minutos * 60 * 1000));
    const expira = "expires=" + fecha.toUTCString();

    document.cookie = `usuario=${nombre}; ${expira}; path=/`;
    document.cookie = `edad=${edad}; ${expira}; path=/`;
    alert("Cookies creadas por 30 minutos");
}