const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";

function rombo(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y - 60);
  ctx.lineTo(x + 50, y);
  ctx.lineTo(x, y + 60);
  ctx.lineTo(x - 50, y);
  ctx.closePath();
  ctx.fill();
}

rombo(300, 200);
rombo(240, 300);
rombo(360, 300);
