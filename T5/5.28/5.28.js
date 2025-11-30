function validarHora(hora) {
  const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return regex.test(hora);
}

console.log(validarHora("14:30")); 
console.log(validarHora("23:59")); 
console.log(validarHora("24:00")); 
console.log(validarHora("9:05"));