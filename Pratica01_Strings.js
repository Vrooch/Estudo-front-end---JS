console.log("Praticando oq foi aprendido sobre as strings: ");

let nome = "Vinicius";
let sobrenome = "Rocha";
let fullName = nome.concat(" "+sobrenome);

console.log("name: " + nome + " " + sobrenome);
console.log("name: " + fullName);
console.log("Name size: " + fullName.length);

console.log("Tres primieras letras: " + fullName.substring(0, 3));

let splitedFullName = fullName.split(" ");
console.log(splitedFullName[0]);
console.log(splitedFullName[1]);

console.log(`Primeiro nome: ${splitedFullName[0]}`);
console.log(`Segundo nome: ${splitedFullName[1]}`);

console.log(`Nome em caixa alta: ${nome.toUpperCase()}`);
console.log(`Sobrenome em caixa baixa: ${sobrenome.toLowerCase()}`);

console.log(`Alterando i por o: ${nome.replace("i", "o")}`);
console.log(`Alterando i por o: ${nome.replaceAll("i", "o")}`);