/*Crea una clase con dos propiedades y dos métodos donde se evidencien
 los conceptos de abastracción y encapsulamiento de la programación orientada a objetos */

 class bicicleta {
    cuadro = "Orbea";
    cambio = "Shimano";
    #nserie;

    constructor(cuad, camb){
        this.cuadro = cuad;
        this.cambio = camb;
        this.#nserie = 115485484;
    }
    mostrar(){
        console.log(`${this.cuadro}/${this.cambio}/${this.#nserie}`);
    }
 }
 let miBici = new bicicleta("Pinarello", "Look");
 miBici.mostrar();