
const funcaoRecursiva = (valor) => {
    funcaoRecursiva(valor)
}


function fatorial (valor) {
    if (valor === 0 || valor ===1) return valor;
    return valor * fatorial(valor-1);
}

console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));