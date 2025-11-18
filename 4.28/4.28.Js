function compararArrays(arr1, arr2) {
    const arr3 = [];
    const size = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < size; i++) {
        arr3[i] = []; 
        for (let j = 0; j < size; j++) {
            if (arr1[i][j] === arr2[i][j]) {
                arr3[i][j] = 0; 
            } else {
                arr3[i][j] = 1; 
            }
        }
    }
    return arr3;
}


const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
const B = [
    [1, 5, 3, 8],
    [0, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 1, 11]
];

const C = compararArrays(A, B);

console.log("Array A:", A);
console.log("Array B:", B);
console.log("Array C:", C);