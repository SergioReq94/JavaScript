const vehiculo = {
  marca: "Ford",
  modelo: "Focus",
  color: "Gris"
};

sessionStorage.setItem("vehiculo", JSON.stringify(vehiculo));

const datos = JSON.parse(sessionStorage.getItem("vehiculo"));
document.body.innerHTML = datos.marca + " " + datos.modelo + " " + datos.color;
