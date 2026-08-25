
function SayName(name) {
    console.log(name);
}
function teste (func, name){
    console.log("antes");
    func(name);
    console.log("depois");
}

teste(SayName, "Vinicius")


function teste2(func, paramiter){
    setTimeout(() => {
        func(paramiter);
    }, 1500);
}

teste2(SayName, "VINICIUSSSS");

for (let i = 0; i < 50000000; i++){
    if(i%100 === 0) console.log(i)
}