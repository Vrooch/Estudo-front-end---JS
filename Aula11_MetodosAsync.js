
const aguardar = async (x) => {
    setTimeout(() => {console.log("executado ...")}, 45);
    return Promise.resolve("Finalizado")
}

const result = aguardar(10);
console.log("vinicius");
setTimeout(() =>{
    console.log("vinicius");
}, 200)
console.log(await result);

console.log("Isabella")