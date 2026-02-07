document.getElementById('btn').onclick = async function buscar() {
        const query = document.getElementById('busqueda').value;
        const resDiv = document.getElementById('resultados');
        resDiv.innerHTML = "Buscando...";

        try {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
            
            if (!response.ok) throw new Error("Error en la API: " + response.status);
            
            const data = await response.json();
            
            // Verificamos que 'results' exista antes de usar 'slice'
            if (data.results && data.results.length > 0) {
                const tresPrimeros = data.results.slice(0, 3);
                resDiv.innerHTML = tresPrimeros.map(item => `
                    <div>
                        <img src="${item.thumbnail}" width="50">
                        <p>${item.title} - $${item.price}</p>
                    </div>
                `).join('');
            } else {
                resDiv.innerHTML = "No se encontraron resultados.";
            }
        } catch (error) {
            resDiv.innerHTML = `<p style="color:red">Error: La API de Mercado Libre denegó el acceso (403 Forbidden). Prueba a usar un servidor local (Live Server) o revisa la conexión.</p>`;
            console.error(error);
        }
    };