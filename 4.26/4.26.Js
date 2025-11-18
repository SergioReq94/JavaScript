function modificarMatriz(matriz) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i !== j) {
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
}

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(modificarMatriz(matrizOriginal));