process.stdin.setEncoding('utf8');

let biggestString = "";
let generalArray = []

function codify (txt){
    splitedTxt = txt.split(' ');
    let codified = " ";
    splitedTxt.forEach(splitedPiece => {
        codified += `${splitedPiece.length}-`;
        if (splitedPiece.length >= biggestString.length) biggestString = splitedPiece;
    });

    return codified.substring(0, codified.length-1);
}

process.stdin.on('data', function(data){

    if(data == 0) {
        if(generalArray.length > 0){
            console.log(`Last biggest word: ${biggestString} \t size: ${biggestString.length}`);

            generalArray.forEach(x => console.log(x));
        }
        process.stdin.pause()
    }
    else{
        generalArray.push(codify(data.substring(0, data.length-2)));
    }
}) 




