/* Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de 
Aula, para modelar las instalaciones de un instituto de enseñanza secuandaria. 
Elige un método con el que evidenciar el concepto del polimorfismo. */

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

class Musica extends Aula{
    instrumento;
    partitura;
    constructor(num, capacidad, instrumento, partitura){
        super(num, capacidad);
        this. instrumento = instrumento;
        this.partitura = partitura;
    }
    mostrar(){
        console.log(`${this.num}/${this.capacidad}/${this.instrumento}/${this.partitura}`);
    }
}

class Tecnologia extends Aula{
    equipo;
    herramienta;
    constructor(num, capacidad, equipo, herramienta){
        super(num, capacidad);
        this.equipo = equipo;
        this.herramienta = herramienta;
    }
    mostrar(){
        console.log(`${this.num}/${this.capacidad}/${this.equipo}/${this.herramienta}`);
    }
}

let aulaMusical = new Musica(205, 50, "guitarra", "la menor");
aulaMusical.mostrar();

let aulaTecno = new Tecnologia(208, 25, "pc", "voltimetro");
aulaTecno.mostrar();