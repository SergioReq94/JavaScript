async function mostrarCV() {
    const response = await fetch('mi_cv.json');
    const datos = await response.json();
    
    document.body.innerHTML += `
        <section>
            <h1>${datos.nombre}</h1>
            <p>Especialidad: ${datos.estudios}</p>
            <p>Habilidades: ${datos.habilidades.join(', ')}</p>
        </section>
    `;
}
mostrarCV();