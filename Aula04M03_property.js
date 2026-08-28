
class Pessoa{
    constructor(nome, idade){
        Object.defineProperty(this, "Nome", {
            value: nome,
            writable: true, //Permite alterar
            configurable: false,
            enumerable: true //Permite mostrar
        });
        Object.defineProperty(this, "Idade", {
            value: idade,
            writable: false, //Nao permite alterar
            configurable: false,
            enumerable: false //Nao permite mostrar
        });
    }
}

const usuario = new Pessoa("Vinicius", 17);
console.log(usuario);
usuario.Nome = "rafaelo";
console.log(usuario);