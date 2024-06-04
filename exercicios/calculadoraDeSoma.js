//EXERCICIO 01
//Calculadora de Soma

//Escreva uma função que receba dois números como argumentos e retorne a soma deles.
function soma (n1,n2){
    return n1+n2;
}
console.log("-------------Exercicio 01 ----------------")
 console.log(soma(5,3));


 //EXERCICIO 02
//Manipulação de Strings

//Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function ManipulandoString(string){
    return string.length;
}
let string = "juliete marcal de soiza";
console.log("-------------Exercicio 02 ----------------")
console.log(ManipulandoString(string));


//EXERCICIO 03
console.log("-------------Exercicio 03 ----------------")

//Crie um array com 5 números e escreva uma função que calcule e retorne a média desses números.

const numeros = [2,4,4,5,5];

function calc(){
    let somadosNumeros = 0;
  for(let i = 0 ; i<numeros.length ; i++){
        somadosNumeros = somadosNumeros + numeros[i];
        divisaoNumeros = somadosNumeros/numeros.length;
  }
  console.log(divisaoNumeros);
}
calc();

// EXERCICIO 04
console.log("-------------Exercicio 04 ----------------");
//Verificação de Par ou Ímpar
//Escreva uma função que receba um número como argumento e retorne "par" se o número for par e "ímpar" se for ímpar.

function parOuImpar(numero){
   if(numero%=0){
    console.log("O numero é par");
   }else{
    console.log("o numero é impar");
   }
}
parOuImpar(2);