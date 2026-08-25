/*
Ele não entendeu a mensagem, então ele perguntou o que isso significava,
 e ela respondeu que era 'I Love You" e logo ele percebeu que cada número
  separado por um ' - ' é a quantidade de caracteres de cada uma das pa-
  lavras que compõem a frase. Com isso, ele teve a ideia de criar um pro-
  grama que inserindo determinada frase, ele calcula a quantidade de ca-
  racteres de cada uma das palavras e separa os valores por ' - '. 
*/

function codify (txt){
    splitedText = txt.split(" ");
    let codified = "";
    splitedText.forEach(splitedPiece => {
        codified += `${splitedPiece.length}` + "-";
    })
    return codified.substring(0, codified.length-1);
}


console.log(codify("I Love You"))