const miCaja = document.getElementById("miCaja");
let x = 0;
let y = 0;
const step = 10;


// document.addEventListener("keypress", (event)=>{
//     console.log(event.key);
//     console.log(event.location);
// });

document.addEventListener("keydown", (event) => {

  switch (event.key) {
    case "ArrowDown":
      y += step;
      break;
    case "ArrowUp":
      y -= step;
      break;
    case "ArrowLeft":
      x -= step;
      break;
    case "ArrowRight":
      x += step;
      break;
    default:
      return; 
  }

   miCaja.style.top = y + 'px';
   miCaja.style.left = x + 'px';

});