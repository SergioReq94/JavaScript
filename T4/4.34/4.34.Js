function tribonacci(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

const limite = 10;
for (let i = 0; i < limite; i++) {
    console.log(`(${i}): ${tribonacci(i)}`);}