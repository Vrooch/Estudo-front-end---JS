
const pessoas = [
    {
        Nome: "Vinicius",
        Idade: 23,
        Exibir: true
    },
    {
        Nome: "Isabella",
        Idade: 21
    },
    {
        Nome: "Gustavo",
        Idade: 37
    },
    {
        Nome: "Yago",
        Idade: 15
    },
        {
        Nome: "Pietra",
        Idade: 17
    },
    {
        Nome: "Eder",
        Idade: 51
    },
    {
        Nome: "Jeniffer",
        Idade: 61
    },
    {
        Nome: "Arthur",
        Idade: 13
    },
        {
        Nome: "Sofi",
        Idade: 19
    },
        {
        Nome: "Nillma",
        Idade: 11
    }
]
const resultado = pessoas.some( x => x.Idade > 50);
console.log("Ha pessoas maiores que 50 anos: ", resultado)

const resultado2 = pessoas.every( x => x.Idade > 17);
console.log("Todas as pessoas sao mauiores de idade: ", resultado2)