const miCaja = document.getElementById("miCaja");

miCaja.addEventListener("mouseenter", () => {

   const maxX = window.innerWidth - 100;
   const maxY = window.innerHeight - 100;

   const randomX = Math.floor(Math.random() * maxX);
   const randomY = Math.floor(Math.random() * maxY);

   miCaja.style.top = randomY + "px";
   miCaja.style.left = randomX + "px";
});