/* Escribe un programa con herencia de clases que permita modelar los objetos Telefono, Fijo, y Móvil,
de manera que el Teléfono sea la clase madre y Fijo y móvil, clases derivadas. */

class Telefono {
    num;
    operador;
    constructor(num = 968632179, operador = "Orange"){
        this.num = num;
        this.operador = operador;
    }
     mostrar(){
        console.log(`${this.num}/${this.operador}`);
    }
}

let tel = new Telefono(968633247, "Amena");
tel.mostrar();

class Fijo extends Telefono{
    constructor(num, operador){
        super(num, operador);
    }
}

let telFijo = new Fijo();
telFijo.mostrar();

class Movil extends Telefono{
    modelo;
    esim;
    constructor(num, operador, modelo, esim){
        super(num, operador);
        this.modelo = modelo;
        this.esim = esim;
    }

    mostrar2(){
        console.log(`${this.num}/${this.operador}/${this.modelo}/${this.esim}`);
    }
}

let mov = new Movil(636000111, "MasMovil", "iphone", true);
mov.mostrar2();