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


console.log("Filtrando as pessoas maiores de idade:")
const pessoasDeMaior = pessoas.filter( elemento => elemento.Idade >= 18);
pessoasDeMaior.forEach(elemento => console.log(elemento.Nome))

console.log("\n\nFiltrando as pessoas com campo exibir === true (so o vinicios tem esse campo definido):")
const pessoasExibir = pessoas.filter( elemento => !!elemento.Exibir);
pessoasExibir.forEach(elemento => console.log(elemento.Nome))
/* Saida:
Vinicius
*/