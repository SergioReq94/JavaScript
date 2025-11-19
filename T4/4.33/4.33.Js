function filtrarCaracteres(cadena) {
    return cadena.filter(cad => cad !== "ñ");
}
let caracter = ["ñ", "$", "&"];
console.log(filtrarCaracteres(caracter));