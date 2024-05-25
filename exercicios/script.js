// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função.
// Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

function somaNota(n1,n2,n3,){
    return n1+n2+n3
}
function media(){
    let ret = somaNota(n1,n2,n3);
    return somaNota/3;
}
console.log(somaNota(2,4,5));
console.log(media());

