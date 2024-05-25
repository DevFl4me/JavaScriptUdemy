function somar(num1,num2){
    return num1+num2;
}
let res = somar(1,5);
//console.log(res);

//console.log(somar(10,5));

const executar = somar;

//console.log(executar(8,5));

// Exemplo 2

function subtrair(num1,num2){
    return num1 - num2;
}

function faz_algo(num1,num2,funcao){
    return funcao(num1,num2);
}

//console.log(faz_algo(5,5,somar))
//console.log(faz_algo(4,1,subtrair))

//Exemplo 3

function outra(z){
    return z;
}

const ret = outra(subtrair);
console.log(ret(8,2))

//------------------------------------------------

function mensagem(){
    console.log("Evolua a cada dia!!")
}
//mensagem();

let valores = [1,3.4,true,somar];

for(i = 0; i<valores.length;i++){
    console.log(typeof(valores[i]));
}