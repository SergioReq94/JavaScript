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
        document.write(this.anyoFundacion + "," + this.numSocios);
    }
}
Madrid = new Club(1910, 2000000000);
Madrid.verClub();

Barcelona = new Club(1890, 500000000);
Barcelona.verClub();

