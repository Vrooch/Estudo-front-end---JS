class Pessoa{
    constructor(nome, idade){
        Object.defineProperty(this, "Nome", {
            get: () => nome,
            set: () => nome,
        });
        Object.defineProperty(this, "Idade", {
            get: () => idade,
            set: () => idade
        });
    }
}

class Pessoa2{
    constructor(nome, sobrenome, idade){
        Object.defineProperties(this,{
            Nome: {
                get: () => nome,
                set: () => nome
            },
            Sobrenome: {
                get: () => sobrenome,
                set: () => sobrenome
            },
            Idade: {
                get: () => idade,
                set: (value) => {
                    if (value < 18) throw new RangeError()
                    idade = value;
                }
            }
        })
        this.Idade = idade;
    }
}

const usuario = new Pessoa2("Vinicius", "Rocha", 20);
console.log(usuario.Nome)
console.log(usuario.Idade)