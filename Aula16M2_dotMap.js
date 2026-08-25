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

function GetJustName (objeto){
    return {
        ...objeto,
        OutraCoisa: objeto.Idade*15
    }
}

console.log(pessoas.map(GetJustName))