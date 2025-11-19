const invertida = function(cadena){
    let nuevaCadena = "";
    for (let i = cadena.length -1; i >= 0; i--) {
        nuevaCadena += cadena[i]; 
    }
    return nuevaCadena;
};
console.log(invertida("alabarda"));