let message1 = "Vinicius";

// Mostrando o tamanho:
console.log(message1.length)
// Saida: 8

// concateando com outra messagem +
let message2 = "Rocha";
console.log(message1 + message2);
// Saida: ViniciusRocha

// concateando com outra messagem concat
console.log(message1.concat(message2));
// Saida: ViniciusRocha

// pegando Substring(n)
console.log(message1.substring(1))

// pegando Substring(n1, n2)
// sendo messagem1 = "Vinicius";
console.log(message1.substring(1, 8)) // Saida: inicius
console.log(message1.substring(8, 1)) // Saida: inicius

//Quebrando a string:
console.log("Vinicius Rocha".split(" "));
// Sainda: [ 'Vinicius', 'Rocha' ]

// compondo string:
console.log(`vincius: ${message1}`);
// Saida: vincius: Vinicius

// Passando a string para maiuscula:
console.log(message1.toUpperCase());
// Saida: VINICIUS

// Passando a string para ciaxa baixa:
let message3 = "VINICIUS";
console.log(message3.toLowerCase());
// Saida: vinicius

// Substituindo partes da string:
let message4 = "Danver is a big city";
console.log(message4.replace("big", "small"));
// Saida: Danver is a small city