async function ejecutarFetch() {
    try {
        const res = await fetch('https://swapi.dev/api/people/1/');
        const data = await res.json();
        alert(`Personaje: ${data.name}`);
    } catch (error) {
        alert("Error en la conexión");
    }
}

// Ventajas: 

// Legibilidad: El código parece secuencial, no hay que saltar de un .then a otro.

// Control de errores: Permite usar try/catch igual que en el código síncrono.

// Mantenimiento: Es mucho más sencillo de debugear y ampliar.