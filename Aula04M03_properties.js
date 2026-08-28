
function property (initialValue){
    return {
        value: initialValue,
        writable: false, 
        configurable: false,
        enumerable: true 
    }
}

class Pessoa{
    constructor(nome, idade){
        Object.defineProperties(this, {
            Nome: property(nome),
            Idade: property(idade)
        })
    }
}


const usuario = new Pessoa("Vinicius", 17);
console.log(usuario);
usuario.Nome = "rafaelo";
console.log(usuario);