function validarURL(url) {
  const regex = /^https?:\/\/.+\..+$/;
  return regex.test(url);
}

console.log(validarURL("https://www.ejemplo.com")); 
console.log(validarURL("http://ejemplo.es")); 
console.log(validarURL("ftp://archivo.com")); 
console.log(validarURL("www.sitio.com")); 