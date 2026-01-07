function generarTabla() {
    const filas = prompt("¿Cuántas filas?");
    const columnas = prompt("¿Cuántas columnas?");
    const tabla = document.createElement('table');
    tabla.setAttribute('border', '1');

    for (let i = 0; i < filas; i++) {
        const tr = tabla.insertRow();
        for (let j = 0; j < columnas; j++) {
            const td = tr.insertCell();
            td.textContent = Math.floor(Math.random() * 100);
        }
    }
    document.body.appendChild(tabla);

    const filasDetectadas = tabla.rows.length;
    const columnasDetectadas = tabla.rows[0].cells.length;
    console.log(`Tabla detectada: ${filasDetectadas} filas y ${columnasDetectadas} columnas.`);
}