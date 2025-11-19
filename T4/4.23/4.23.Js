function bisiesto(year){
    if((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)){
        return "El año es bisiesto";
    }else{
        return "El año no es bisiesto";
    }
}

console.log(bisiesto(2000));
console.log(bisiesto(2001));