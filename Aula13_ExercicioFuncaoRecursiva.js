
const somaRecursiva = (value) =>{
    if (value < 0 ) return 0
    if(value <= 1) return value;
    return value + somaRecursiva(value-1);
};

console.log(somaRecursiva(-1));
console.log(somaRecursiva(0));
console.log(somaRecursiva(1));
console.log(somaRecursiva(4));
console.log(somaRecursiva(10));