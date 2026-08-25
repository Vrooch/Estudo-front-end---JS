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

console.log("Pessoas e idades:")
pessoas.forEach(elemento => console.log(`Nome: ${elemento.Nome}  \t Idade: ${elemento.Idade}`));

const pessoaMaiorQue30 = pessoas.find( elemento => elemento.Idade > 30);

console.log("\n\nPessoa maior de 30: " + pessoaMaiorQue30.Nome)