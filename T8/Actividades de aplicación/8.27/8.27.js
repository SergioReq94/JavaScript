document.getElementById("archivo").addEventListener("change", e => {
  const archivo = e.target.files[0];
  console.log(archivo.name);
});
