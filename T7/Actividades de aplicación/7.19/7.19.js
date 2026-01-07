let miImagen = document.getElementById("miImagen");
miImagen.addEventListener("keypress", (evento)=>{
    if(evento.key >= 0 && evento.key <= 9){
        console.log(`Tecla pulsada ${evento.key}`);
    }
})