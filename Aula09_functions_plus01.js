
// Forma tradicional
function Somar (x, y) {
    console.log(`resultado : ${x+y}`);  
    return x+y;
}
const result = Somar(4,3);
console.log(result);

// Forma atribuida
const somar1 = function(x, y){
    console.log("soma1 realizada");
    return x+y;
}
const result1 = somar1(2, 7);
console.log(result1);

// Forma air1
const somar2 =  (x,y) => {
    return x+y;
}
const result2 = somar2(2, 7);
console.log("result2: " + result2);

// Forma air2
const somar3 = (x, y) => console.log("Result3: " + (y+x));
somar3(20, 14);