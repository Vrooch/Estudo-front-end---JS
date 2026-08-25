

const Vinicius = {
    Nome : "Vinicius",
    Idade : 23,
    Curso : "Engenharia de software",
    LocalDeTrabalho: "Schott",
    Cidade : "Jundiai",
    Bairro : "Novo Horizonte"
}

function ExibirInfo(Pessoa, chave1, chave2){
    console.log(`Monstrando os dados da pessoa: ${Pessoa.Nome}`);
    console.log(`${chave1}: ${Pessoa[chave1]}`);
    console.log(`${chave2}: ${Pessoa[chave2]}`);
}

ExibirInfo(Vinicius, "Idade", "Cidade")

