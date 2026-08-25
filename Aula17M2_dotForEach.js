const pessoas = [
    {
        Nome: "Vinicius",
        Idade: 23
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
    }
]
console.log("Com for: ")
for (let i = 0; i<pessoas.length; i++){
    console.log(pessoas[i]);
}

console.log("\n\nAgr com .forEach: ")
pessoas.forEach(elemento => console.log(elemento.Nome));