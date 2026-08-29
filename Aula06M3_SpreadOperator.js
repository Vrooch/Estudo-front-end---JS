const pessoa = {
    Nome: "Vinicius",
    Idade: 23,
    Sobrenome: "Rocha",
}
const pessoa2 = {
    ...pessoa,
    Emprego: "Dev",
    Falculdade: "Eng de software"
}


console.log(pessoa)
console.log(pessoa2)


const lista1 = [15, 56, 28, 19]
const lista2 = [69, 23, 78, 45]
const listasJustas = [ ...lista1, ...lista2]

console.log(lista1)
console.log(lista2)
console.log(listasJustas)