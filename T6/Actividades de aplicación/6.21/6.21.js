const caja = document.getElementById('caja');

caja.dataset.width = prompt("Ancho de la caja:");
caja.dataset.height = prompt("Alto de la caja:");
caja.dataset.bordercolor = prompt("Color del borde:");

caja.style.width = caja.dataset.width;
caja.style.height = caja.dataset.height;
caja.style.border = `5px solid ${caja.dataset.bordercolor}`;