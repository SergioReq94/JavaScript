class Club{
    anyoFundacion;
    numSocios;
    nombreEstadio;
    ciudad;
    palmares;
    constructor(anyoFundacion, numSocios, nombreEstadio, ciudad, palmares){
        this.anyoFundacion = anyoFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares.titulo;
        this.palmares = palmares.anyo;
    }
    verClub(){
        document.write(`Año de fundación: ${this.anyoFundacion}<br>
            Número de socios: ${this.numSocios}<br>
            Nombre del estadio: ${this.nombreEstadio}<br>
            Ciudad: ${this.ciudad}<br>
            Palmarés: ${this.palmares}<br><br>`);
    }
}
let realMadrid = new Club(1910, 2000000000, "Santiago Bernabeu", "Madrid", "Champions", 2023);
realMadrid.verClub();

let fbcBarcelona = new Club(1890, 500000000, "Camp Nou", "Barcelona", "20 ligas");
fbcBarcelona.verClub();

let realMurcia = new Club();
realMurcia.verClub();
