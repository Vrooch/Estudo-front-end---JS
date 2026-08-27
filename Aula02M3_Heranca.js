class user {
    Email;
    Senha;
    Nome;
    constructor(email, senha, nome){
        this.Email = email;
        this.Senha = senha;
        this.Nome = nome;
    }
}

class administrador extends user {
  Permissoes;
    constructor(email, senha, nome, Permissoes){
        super(email, senha, nome);
        this.Permissoes = Permissoes;
    }
}

const admim = new administrador("vinirooch@gmail.com", "senha", "vinicius", [1, 4, 5])
console.log(admim)