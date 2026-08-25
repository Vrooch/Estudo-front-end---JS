
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

pessoas.sort((a, b) =>{
    if (a.Idade < b.Idade) return -1;
    if (a.Idade > b.Idade) return 1
    return 0
})

pessoas.sort((a, b) =>{
    if(a.Idade > b.Idade) return -1
    if(b.Idade < b.Idade) return 1
    return 0
})

console.log(pessoas)
console.log(pessoas)


pessoas.sort((a, b) => {
    if (a.Nome.toUpperCase() < b.Nome.toUpperCase()) return -1
    if (a.Nome.toUpperCase() > b.Nome.toUpperCase()) return 1
    return 0
})


console.log(pessoas)