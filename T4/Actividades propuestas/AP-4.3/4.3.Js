function adivina(...letras){
let palabra = "sargento";
let resultado = "";

    for (const letra of palabra) {
        if(letras.includes(letra)){
            resultado += letra;
        }else{
            resultado += "-";
        } 
    }
    document.write(resultado);
}

adivina("a", "e", "i" ,"o", "u");