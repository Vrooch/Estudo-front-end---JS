

class Pessoa {
    Nome;
    Idade;
    Filhos;
    Parceiro;
    
    constructor(nome, idade, filhos, parceiro){
        this.Nome = nome;
        this.Idade = idade;
        this.Filhos = filhos;
        this.Parceiro = parceiro;
    }

    quantosFilhos(){
        if(this.Filhos){
            return this.Filhos.length;
        }
        return 0;
    }

}

const filho1 = new Pessoa("albertina", 13)
const filho2 = new Pessoa("javerino", 16)

const pai = new Pessoa("elton", 32, [filho1, filho2])
const mae = new Pessoa("elton", 32, [filho1, filho2], pai)
pai.Parceiro = mae

console.log(pai)
console.log(mae)

console.log(pai.quantosFilhos())
console.log(mae.quantosFilhos())