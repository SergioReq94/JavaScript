let miImagen = document.getElementById("miImagen");
miImagen.addEventListener("keypress", (event)=>{
    if(event.key >= 0 && event.key <= 9){
        console.log(`Tecla pulsada ${event.key}`);
    }
})