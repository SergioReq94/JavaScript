/* Construye un objeto partiendo de Object y modificalo al vuelo para modelar una matriz.
Sus propiedades serán, nFilas, nColumnas, y contenido, y sus métodos inicializarMatriz(valor),
que rellena toda la matriz con el mismo valor, aleatoriaMatriz(), que rellena la matriz con enteros
aleatorios entre 1 y 100, y verMatriz() que la muestra por consola. */

class Matriz {
    constructor(nFilas, nColumnas) {
        this.nFilas = nFilas;
        this.nColumnas = nColumnas;
        this.contenido = [];
    }

    inicializarMatriz(valor) {
        this.contenido = Array(this.nFilas).fill(null).map(() => 
            Array(this.nColumnas).fill(valor)
        );
    }

    aleatoriaMatriz() {
        this.contenido = Array(this.nFilas).fill(null).map(() => 
            Array(this.nColumnas).fill(null).map(() => 
                Math.floor(Math.random() * 100) + 1 
            )
        );
    }

    verMatriz() {
        console.log(`Matriz de ${this.nFilas}x${this.nColumnas}:`);
        this.contenido.forEach(fila => {
            console.log(fila.join('\t')); 
        });
    }
}

const matriz1 = new Matriz(3, 4);
matriz1.inicializarMatriz(0);
matriz1.verMatriz();

const matriz2 = new Matriz(5, 5);
matriz2.aleatoriaMatriz();
matriz2.verMatriz();