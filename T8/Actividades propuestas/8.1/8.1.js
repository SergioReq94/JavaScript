function comprueba(n){
    if(n < 0 || n > 1){
        throw new RangeError("Fuera de rango");
    }
}
try {
    comprueba(3);

} catch (error) {
    if (error instanceof RangeError){
        console.log(`${error.name}:${error.message}`);
        console.log("Por favor, vuelve a introducir un valor.");
    }

    if(error instanceof TypeError){
        console.log(`${error.name}:${error.message}`);
        console.log("Por favor, vuelve a introducir un valor.");
    }

    if(error instanceof SyntaxError){
        console.log(`${error.name}:${error.message}`);
        console.log("Por favor, vuelve a introducir un valor.");
    }
}