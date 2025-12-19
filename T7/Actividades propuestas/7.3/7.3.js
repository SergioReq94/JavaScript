let elem = document.getElementsByTagName("html")[0];
elem.addEventListener("contextmenu", function(evento){
    evento.preventDefault();
});