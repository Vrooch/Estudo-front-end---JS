class Produto{
    constructor(nome, preco, descricao, codigo, qtd){
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: () => nome 
            },
            preco: {
                get: () => preco,
                set: (value) =>{
                    if(!value > 0 ) throw new RangeError("O preco deve ser maior que 0")
                    preco = value
                }
            },
            descricao: {
                get: () => descricao,
                set: () => descricao                 
            },
            codigo: {
                get: () => codigo,
                set: () => codigo                 
            },
            qtd: {
                get: () => qtd,
                set: (value) => {
                    if(value < 0) throw new RangeError("Quantidade nao pode ser menor que 0")
                    qtd = value
                }
            }
        })

        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.codigo - codigo;
        this.qtd = qtd;

    }
    PegarProduto(qtd){
        if((this.qtd-qtd) < 0) throw new Error("Quantidade de produto nao pode ser menor que 0")
        this.qtd - qtd
        console.log("Baixa realizada com sucesso")
        console.log("Valor da transacao: "+ (this.preco*qtd))
    }
}

const teclado = new Produto("Teclado", 119.50, "teclado sem fio", 5946684, 21)
const cadeira = new Produto("cadeira", 759.25, "cadeira ", 951651, 10)
const monitor = new Produto("Monitor", 1203.78, "teclado sem fio", 47783, 3)
const mouse = new Produto("Mouse", 69.50, "teclado sem fio", 458621, 50)

console.log(teclado.nome)
console.log(cadeira.nome)
console.log(monitor.nome)
console.log(mouse.nome)

cadeira.preco = 11

cadeira.PegarProduto(3)

