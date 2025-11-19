function jugar(rondas = 5){
    let jugador1 = 0;
    let jugador2 = 0;
    let ganador;
        for (let i = 0; i <= rondas; i++) {
            jugador1 += Math.floor(Math.random()*6);
            jugador2 += Math.floor(Math.random()*6);
        }

    if(jugador1 > jugador2){
        ganador ="El jugador 1 ha ganado con " + jugador1 + "<br>";
    }if(jugador2 > jugador1){
        ganador = "El jugador 2 ha ganado con " + jugador2 + "<br>";
    }
    return document.writeln(ganador);
}

jugar();
jugar(3);
jugar(10);