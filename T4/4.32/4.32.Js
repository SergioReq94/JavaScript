function mismasLetras(palabra1, palabra2) {
  const ordenar = palabra => palabra.toLowerCase().split('').sort().join('');
  return ordenar(palabra1) === ordenar(palabra2);
}

console.log(mismasLetras("arte", "etra"));
console.log(mismasLetras("arte", "esos"));