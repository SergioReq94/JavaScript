class Pelicula{
    nombre;
    releaseDate;
    duracion;
    genero;
    actores;
    cartel;
    director;
    constructor(str){
        let peli = JSON.parse(str);
        this.nombre = peli.nombre;
        this.releaseDate = peli.releaseDate;
        this.duracion = peli.duracion;
        this.genero = peli.genero;
        this.actores = peli.actores;
        this.cartel = peli.cartel;
        this.director = peli.director;
    }
    mostrar(){
        console.log(`Nombre: ${this.nombre}\nAño de estreno: ${this.releaseDate}\nDuración: ${this.duracion}\nGénero: ${this.genero}\nActores principales: ${this.actores}\nCartel: ${this.cartel}\nDirector: ${this.director}`);
    }
}

let str = new String(`{
    "nombre":"Muerte entre las flores",
    "releaseDate":"1990",
    "duracion":"115 minutos",
    "genero":"Crimen, Drama, Neo-noir",
    "actores":["Gabriel Byrne", " Marcia Gay Harden", " John Turturro", " Albert Finney", " Jon Polito", " J.E. Freeman"],
    "cartel":"https://pics.filmaffinity.com/miller_s_crossing-859000550-large.jpg",
    "director":"Joel Coen, Ethan Coen"}`);

let p1 = new Pelicula(str);
p1.mostrar();