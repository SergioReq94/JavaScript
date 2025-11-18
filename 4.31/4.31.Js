function operacionesVarias(...numeros) {
    const n = numeros.length;
    const suma = numeros.reduce((acc, current) => acc + current, 0);
    const media = suma / n;
    const multiplicacion = numeros[0] * numeros[n - 1];
    const division = numeros[1] / numeros[n - 2];
    return {
        suma: suma,
        mediaAritmetica: media,
        multiplicacionPrimeroUltimo: multiplicacion,
        divisionSegundoPenultimo: division
    };
}

const resultado = operacionesVarias(10, 2, 5, 8, 3);
console.log("Resultados:", resultado);