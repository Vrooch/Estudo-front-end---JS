// Apreendendo o bloco trycatch


function getHalf (value){
    if(value <= 0) throw new Error("Valuew should be bigger than 0");
    return value / 2;
}


try{
    const result = getHalf(1);
    console.log(result)
}
catch (error){
    console.log(error.message);
}


