function Distancia (tempo, velocidade){
    return tempo*velocidade;
}
function LGastos (distancia){
    return distancia/12
}

console.log("Litros Gastos: ", LGastos(Distancia(10, 85)).toFixed(3));
console.log("Litros Gastos: ", LGastos(Distancia(2, 92)).toFixed(3));
console.log("Litros Gastos: ", LGastos(Distancia(22, 67)).toFixed(3));