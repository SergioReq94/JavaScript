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
        this.palmares = palmares;
    }
    verClub(){
        document.write(`Año de fundación: ${this.anyoFundacion}<br>
            Número de socios: ${this.numSocios}<br>
            Nombre del estadio: ${this.nombreEstadio}<br>
            Ciudad: ${this.ciudad}<br>
            Palmarés: ${this.palmares}<br><br>`);
    }
}
let realMurcia = new Club();
realMurcia.verClub();

let ciudadMurcia = new Club(1850);
ciudadMurcia.verClub();

let laHoya = new Club(1925, 50000);
laHoya.verClub();

let realBetis = new Club(1900, 2000000, "Benito Villamarín");
realBetis.verClub();

let fbcBarcelona = new Club(1890, 500000000, "Camp Nou", "Barcelona");
fbcBarcelona.verClub();

let realMadrid = new Club(1910, 2000000000, "Santiago Bernabeu", "Madrid", "Champions");
realMadrid.verClub();