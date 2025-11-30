function validarDecimal(numero) {
  const regex = /^-?\d+([.,]\d{1,2})?$/;
  return regex.test(numero);
}

console.log(validarDecimal("123.45")); 
console.log(validarDecimal("-60,80")); 
console.log(validarDecimal("45.5")); 
console.log(validarDecimal("abc"));