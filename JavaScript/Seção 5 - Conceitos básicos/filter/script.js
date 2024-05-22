//FILTRA ELEMENTOS DENTRO DO ARRAY, ISSO PODE DIMINUIR O TAMANHO DO ARRAY APÓS SER FILTRADO

var numeros = [4,5,6,7,8,9,10];

function filtrarPares(numero){
    return numero % 2 == 0;
}

// console.log(filtrarPares(3)); //false
// console.log(filtrarPares(4)); //true

function filtrarImpares(numero){
    return numero % 2 !== 0;
}
function filtrarMultiplo(numero){
    return numero % 5 === 0;
}
 
var ret = numeros.filter(filtrarPares);
//console.log(ret)

var ret = numeros.filter(filtrarImpares);
//console.log(ret)

var ret = numeros.filter(filtrarMultiplo);
//console.log(ret)


var alunos =[
    {nome:'Pedro', nota: 8.5},
    {nome:'Pedro', nota: 10.0},
    {nome:'Pedro', nota: 9.2}, 
    {nome:'Pedro', nota: 7.3}
]

function filtrar_notas_maiores_que_8(aluno){
    return aluno.nota > 8;
}

var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
console.log(filtrados);