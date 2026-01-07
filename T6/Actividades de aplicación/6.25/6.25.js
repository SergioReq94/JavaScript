window.onload = function() {
    console.log("Página cargada. Esperando 10 segundos para hacer scroll...");
    
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 10000);
};