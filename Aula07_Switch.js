
let variavel = 4

switch(variavel){
    case 1:
        console.log("Opcao 1 foi selecionado");
        break;
    case 2:
        console.log("Opcao 2 foi selecionado");
        break;
    case 3:
        console.log("Opcao 3 foi selecionado");
        break;
    case 4:
        console.log("Opcao 4 foi selecionado");
        // Aqui como n tem o break ele exibe tmb a proxima, e assim sucesivamente ate o proximo break
    case 5:
        console.log("Opcao 5 foi selecionado");
        break;
    case 6:
        console.log("Opcao 6 foi selecionado");
        break;
    case 7:
        console.log("Opcao 7 foi selecionado");
        break;
    default:
        console.log("Opcao ainda nao mapeada")
        break;
}



