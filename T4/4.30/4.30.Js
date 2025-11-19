function primo(n) {
    let esPrimo = true;
    if(n <= 1){
        esPrimo = false;
    }
    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            esPrimo = false;
        } 
    }
    return esPrimo;
}
console.log(primo(0));
console.log(primo(1));
console.log(primo(2));
console.log(primo(3));
console.log(primo(4));