const comprarProducto = new Promise((resolve) => {
    resolve("Producto añadido al carrito");
});

comprarProducto
    .then(paso1 => {
        console.log(paso1);
        return "Pago procesado con éxito";
    })
    .then(paso2 => {
        console.log(paso2);
        return "Generando factura";
    })
    .then(paso3 => {
        console.log(paso3);
        console.log("Gracias por su compra.");
    });