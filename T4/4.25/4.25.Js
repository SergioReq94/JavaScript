function letraDNI(dni){
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letras[dni % 23];
}

console.log(letraDNI(48854514));