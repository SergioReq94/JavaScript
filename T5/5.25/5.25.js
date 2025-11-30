const operacionesFecha = {
  diffFechas(fecha1, fecha2) {
    const diff = Math.abs(fecha2 - fecha1);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `Diferencia: ${dias} días`;
  },

  masFecha(fecha1, fecha2) {
    return fecha1 > fecha2 ? fecha1 : fecha2;
  },

  testFecha(fecha) {
    return fecha instanceof Date && !isNaN(fecha);
  },

  sysOfFecha(fecha) {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }
};

const fecha1 = new Date('2024-01-15');
const fecha2 = new Date('2024-01-20');

console.log('Diferencia:', operacionesFecha.diffFechas(fecha1, fecha2), 'días'); //
console.log('Más reciente:', operacionesFecha.masFecha(fecha1, fecha2)); 
console.log('¿Es válida?', operacionesFecha.testFecha(fecha1)); 
console.log('¿Es válida?', operacionesFecha.testFecha(new Date('fecha inválida'))); 
console.log('Ayer de fecha2:', operacionesFecha.ayerFecha(fecha2)); 
