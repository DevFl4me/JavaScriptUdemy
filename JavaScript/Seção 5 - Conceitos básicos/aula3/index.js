var idade = 13;

if(idade >=18){
    console.log("Maior de idade!");
}else{
    console.log("Menor de Idade!");
}

if(idade <=14){
    console.log("Criança");

}else if(idade >> 14 && idade <18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

// DICA GEEK (Verifica valor)
if(1=="1"){
    console.log("Sim, 1==1")
}else{
    console.log("não")
};

var valor = 42;

//DICA GEEK (VERIFICA VALOR E TIPO DE DADO)
if(valor==="42"){
    console.log("Sim, 1==1")
}else{
    console.log("não")
};

//SWITCH

var sexo="k";

switch(sexo){
    case "m":
        console.log("Masculino");
        break;
    case "f":
        console.log("Feminino");
        break; 
    default:
        console.log("Desconhecido");    
}

var s = "f";
var masculino;

if (s ==="m"){
    masculino = true;
}else{
    masculino = false;
}
console.log(masculino);

// SIMPLIFICANDO
// var masc = (s=== "m");
var masc = s === "m";
console.log(masc);