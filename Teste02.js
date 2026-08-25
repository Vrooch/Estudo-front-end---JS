function next6Impar (n){
    let i = 0;
    while(i < 6){
        if( n%2 === 1 ){
            i++;
            console.log(n);
        }
        n++;
    }
}

next6Impar(9);

