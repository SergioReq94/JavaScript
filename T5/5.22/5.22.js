class Aula{
    num;
    capacidad;
    constructor(num, capacidad){
        this.num = num;
        this.capacidad = capacidad;
    }
    mostrar(){
        console.log(`${this.num}/${this.capacidad}`);
    }
}

let Lengua = new Aula(101, 25);
Lengua.mostrar();