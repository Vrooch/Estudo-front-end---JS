function exceptMutiplosDe13 (n1, n2){
    // Validacao:
    if(n1>n2 || n1<0) return 0;
    
    // Operacao
    let soma = 0;
    while (n1<=n2){
        if(n1%13 !== 0){
            soma += n1;
        }
        n1++;
    }
    return soma
}

console.log(exceptMutiplosDe13(100, 200));
