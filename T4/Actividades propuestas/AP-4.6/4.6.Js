const compara = (c1, c2) => {
    if(c1.length > c2.length){
        console.log(c1 + " es más grande");
    }else if(c2.length < c1.length){
        console.log(c2 + " es más grande");
    }else{
        console.log("Son iguales");
    }   
}

console.log(compara("perro", "gato"));