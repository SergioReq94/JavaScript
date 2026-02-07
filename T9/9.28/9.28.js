setTimeout(() => {
    console.log("1. Imagen descargada");
    setTimeout(() => {
        console.log("2. Aplicando filtro sepia...");
        setTimeout(() => {
            console.log("3. Redimensionando imagen...");
            setTimeout(() => {
                console.log("4. Imagen guardada en el servidor.");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);