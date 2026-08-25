/*
Entendendo a conversao de tipos em js:
    Em js apsar de nao termos tipos definidos, eles sao implicitamente atribuidos
    Assim, == coverte tipos e realiza a comparacao, enquanto === compara, considerando os tipo;
        1 == "1" --> True;
        1 === "1" --> False;

    Podemos usar Number(txt) para converter um texto em um nuemro;
        Number("200") --> 200;
    
    Podemos usar .toFixed(n) para converter do tipo numerico para texto, defindo uma quantidade de casas decimais;
        200.toFixed(2) --> "200.00"
        200.toFixed(0) --> "200"
*/

let valor = 2;
let valorString = "2";
console.log( valor == valorString) // Saida: true
console.log( valor === valorString) // Saida: false


let Salario = "2500.5230";
let Salario1 = Number(Salario);
console.log(Salario1.toFixed(2)) // Saida: "2500.52"
console.log(Salario1.toFixed(0)) // Saida: "2501"