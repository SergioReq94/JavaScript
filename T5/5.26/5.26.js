function validar(texto) {
  const regex = /^[a-záéíóúüñA-ZÁÉÍÓÚÜÑ,.\-]+$/;
  return regex.test(texto);
}

console.log(validar("Hola,España"));
console.log(validar("Hello world")); 
console.log(validar("Niño123")); 