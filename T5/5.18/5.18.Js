/*Crea una clase con dos propiedades y dos métodos donde se evidencien
 los conceptos de abastracción y encapsulamiento de la programación orientada a objetos */

 class bicicleta {
    cuadro = "Orbea";
    cambio = "Shimano";
    #nserie = 85895645;

    constructor(cuad, camb){
        this.cuadro = cuad;
        this.cambio = camb;
        this.#nserie = num;
    }
    mostrar(){
        console.log(`${this.cuadro}/${this.cambio}`);
    }
 }