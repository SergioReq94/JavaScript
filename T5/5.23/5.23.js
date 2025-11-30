class Club {
    anyoFundacion;
    numSocios;
    nombreEstadio;
    ciudad;
    palmares;
    
    constructor(anyoFundacion, numSocios, nombreEstadio, ciudad, palmares) {
        this.anyoFundacion = anyoFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares;
    }
    
    verClub(mensaje = "Datos del Club:") {

        console.log(`\n--- ${mensaje} ---`);
        console.log(`Año de fundación: ${this.anyoFundacion}`);
        console.log(`Número de socios: ${this.numSocios}`);
        console.log(`Nombre del estadio: ${this.nombreEstadio}`);
        console.log(`Ciudad: ${this.ciudad}`);
        console.log(`Palmarés: ${this.palmares}`);
        
    }
    
    addSocio(cantidad) {
        this.numSocios += cantidad;
    }
    
    addPalmares(titulo) {
        this.palmares = this.palmares === "Sin títulos" ? titulo : `${this.palmares}, ${titulo}`;
    }
}

const clubes = [
    new Club(), // 0 parámetros
    new Club(1850), // 1 parámetro
    new Club(1925, 50000), // 2 parámetros
    new Club(1900, 2000000, "Benito Villamarín"), // 3 parámetros
    new Club(1890, 500000000, "Camp Nou", "Barcelona"), // 4 parámetros
    new Club(1910, 2000000000, "Santiago Bernabeu", "Madrid", "Champions") // 5 parámetros
];

console.log("--- VISUALIZACIÓN INICIAL Y RECORRIDO CON MODIFICACIÓN ---");

clubes.forEach((club, index) => {

    club.verClub(`Club ${index + 1} - Estado Inicial`); 
    club.addSocio(100); 
    
    if (index % 2 === 0) {
        club.addPalmares(`Copa ${index / 2 + 1}`);
    }
    club.verClub(`Club ${index + 1}`); 
});