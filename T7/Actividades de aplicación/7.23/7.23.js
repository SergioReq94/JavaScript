const miCaja = document.getElementById("miCaja");
let x = 0;
let y = 0;
const step = 10;

document.addEventListener("mousenter", ()=>{
   miCaja.style.top = y + 'px' * Math.floor.random()*100;
   miCaja.style.left = x + 'px' * Math.floor.random()*100;


});