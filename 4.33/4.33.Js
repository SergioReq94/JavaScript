function filtrarCaracteres(cadena) {
    let filtro = cadena.filter(cadena => cadena.caracter !== "ñ");
    return filtro;
}
let caracter = ["ñ", "$", "&"];

console.log(filtrarCaracteres(caracter));