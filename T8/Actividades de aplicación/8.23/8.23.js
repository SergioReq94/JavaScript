function generarError(opcion) {
    try {
        switch (opcion) {
            case 1: throw new Error("Error genérico");
            case 2: throw new EvalError("Error en función eval()");
            case 3: throw new RangeError("Número fuera de rango");
            case 4: throw new ReferenceError("Variable no declarada");
            case 5: throw new SyntaxError("Error de sintaxis");
            case 6: throw new TypeError("Tipo de dato incorrecto");
            case 7: throw new URIError("Error en funciones de URI");
        }
    } catch (e) {
        console.log(`Capturado: [${e.name}] - ${e.message}`);
    }
}