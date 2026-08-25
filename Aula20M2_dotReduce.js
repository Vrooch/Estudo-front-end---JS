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

const nomes = pessoas.reduce((acc, elemento) =>{
    acc.push(elemento.Nome) //adiciona nome a lista acc
    return acc //retorna acc pro ciclo continuar
}, [])

nomes.forEach(elemento => console.log(elemento))