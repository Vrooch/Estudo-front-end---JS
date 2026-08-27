class User {
    Email;
    Senha;
    Nome;
    constructor(email, senha, nome){
        this.Email = email;
        this.Senha = senha;
        this.Nome = nome;
    }
    login(email, senha){
        if (this.Senha === senha && this.Email === email) return "Validado";
        return "informacoes erradas"
    }

}

class Administrador extends User {
  Permissoes;
    constructor(email, senha, nome, Permissoes){
        super(email, senha, nome);
        this.Permissoes = Permissoes;
    }
    login(email, senha, acesso){
        if (this.Senha === senha && this.Email === email && this.Permissoes.includes(acesso)) return true;
        return false
    }
}

const usuario = new User("vinicius.com", "1234", "Vinicius")
const admim = new Administrador("marcos.com", "1234", "marcos", [1, 5])

console.log("login: " + usuario.login("vinicius.com", "1234"))
console.log("login: " + admim.login("marcos.com", "1234", 5))