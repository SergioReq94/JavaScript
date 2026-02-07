async function swapiData() {
    const urls = [
        'https://swapi.dev/api/people/1/',   
        'https://swapi.dev/api/planets/1/',  
        'https://swapi.dev/api/starships/2/' 
    ];

    try {
        const respuestas = await Promise.all(urls.map(u => fetch(u).then(res => res.json())));
        
        const container = document.getElementById('star-wars-info');
        container.style.display = 'flex';
        
        container.innerHTML = respuestas.map(item => `
            <div style="flex: 1; border: 1px solid silver; padding: 10px;">
                <h2>${item.name || item.model}</h2>
                <pre>${JSON.stringify(item, null, 2)}</pre>
            </div>
        `).join('');
    } catch (err) {
        console.error("Fallo en la fuerza:", err);
    }
}
swapiData();