function mult(n){
    let resultado = false;
    if(n % 10 === 0){
        resultado = true;
    }
    return resultado;
}

if(mult(90)){
    console.log("Es múltiplo de 10");
}else{
    console.log("No es múltiplo de 10");
}

