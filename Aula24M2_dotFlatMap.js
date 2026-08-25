const pessoas = [
    {
        Nome: "Vinicius",
        Idade: 23,
        Exibir: true,
        Cartoes: [2647, 7009]
    },
    {
        Nome: "Isabella",
        Idade: 21,
        Cartoes: [1006, 7157]
    },
    {
        Nome: "Gustavo",
        Idade: 37,
        Cartoes: [4367, 9647]
    },
    {
        Nome: "Yago",
        Idade: 15,
        Cartoes: [1050, 9730]
    },
        {
        Nome: "Pietra",
        Idade: 17,
        Cartoes: [2369, 5382]
    },
    {
        Nome: "Eder",
        Idade: 51,
        Cartoes: [9861, 8146]
    },
    {
        Nome: "Jeniffer",
        Idade: 61,
        Cartoes: [9643, 9476]
    },
    {
        Nome: "Arthur",
        Idade: 13,
        Cartoes: [1578, 6473]
    },
        {
        Nome: "Sofi",
        Idade: 19,
        Cartoes: [2344, 5596]
    },
        {
        Nome: "Nillma",
        Idade: 11,
        Cartoes: [6516, 5613]
    }
]

const cartoes = pessoas.flatMap( x => x.Cartoes);
console.log(cartoes)

