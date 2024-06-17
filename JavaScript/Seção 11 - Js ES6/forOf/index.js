// let nome = 'Geek University';

// for(let letra of nome){
//     console.log(letra);
// }

let numeros = [1,2,3,4,5];

// for(let numero of numeros){
//     console.log(numero*2);
// }

for(let i in numeros){
    console.log(`Indice: ${i}, Valor:${numeros[i]}`);
}


let cursos = new Map([
    [1, 'Programação para leigos'],
    [2, 'Algoritmos e logica de programação'],
    [3, 'Programação em java'],
    [4, 'Programação Web com Django Framework'],
    [5, 'Banco de dados'],
    [6, 'Programação em C'],
    [7, 'Programação em C++'],

]);

// for(let curso of cursos){
//     console.log(`${curso[0]} - ${curso[1]}`);
// }

// cache/valor
// for(let curso of cursos ){
//     console.log(curso);
// }

// // Somente a chave do map
// for(let chave of cursos.keys()){
//     console.log(chave);
// }

// // Somente o valor
// for(let valor of cursos.values()){
//     console.log(valor);
// }

//Chave e valor
// for(let[chave,valor] of cursos.entries()){
//     console.log(`${chave} - ${valor}`);
// }

let conjunto = new Set([1,2,3,4,5,]);

for(let numero of conjunto){
    console.log(numero);
}