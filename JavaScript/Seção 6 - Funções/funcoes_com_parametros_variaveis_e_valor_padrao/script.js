function somar1(){
    let soma = 0;
    for(let i = 0;i< arguments.length;i++){
        soma+= arguments[i];
    }
    return soma;
}
//console.log(somar1())// 0 
//console.log(somar1(2))// 2
//console.log(somar1(2,4))// 6
//console.log(somar1(2,4,6,8))// 20
//console.log(somar1(2,5,7,9,10,8,6,))// 47

function imprimeValores(num1,num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}
//imprimeValores();
//imprimeValores(4,6);
//imprimeValores(4,6,8);
//imprimeValores(3,6,8,12,44,56);

// Gambiarra 1 
function somar2(num1,num2,num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1+num2+num3;
}
//console.log(somar2(2,4,4)) // 10
//console.log(somar2())//6
//console.log(somar2(2))//7
//console.log(somar2(2,2))//7
//console.log(somar2(2,2,2))//6
//console.log(somar2(2,2,2,2))//6 

// Gambiarra 2
function somar3(num1,num2,num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 1 : num2;
    num3 = isNaN(num3) ? 1 : num3;

    return num1+num2+num3;
}

 //console.log(somar3(4,5,6))
 //console.log(somar3())
 //console.log(somar3(2,2))
 //console.log(somar3(2,2,2))


//FORMA ATUAL RECOMENDADA!!!!
function somar4(num1=1,num2=2,num3=3){
    return num1+num2+num3;
}
//console.log(somar4(4,5,6))//15
// console.log(somar4())//6
// console.log(somar4(2,2))//7
// console.log(somar4(2,2,2))//6~

console.log(somar4('a','b','c'));// concatena e retora abc
console.log(somar4(true,false,'c'));//1c
console.log(somar4(2,true,false));//3

/*
EM JAVASCRIPT 1 É CONSIDERADO TRUE E O 0 É CONSIDERADO FALSE
*/

function somar5(num1=1,num2=2,num3=3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1+num2+num3;
    }else{
        return "Não foi possivel efetuar a soma";
    }
}

console.log(somar5('a','b','c'));// concatena e retora abc
console.log(somar5(true,false,'c'));//1c
console.log(somar5(2,true,false));//3
console.log(somar5(4,5,6))//15