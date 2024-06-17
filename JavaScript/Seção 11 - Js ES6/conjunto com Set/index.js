/*
    - Conjuntos não aceitam repetição de valores.
    - Conjuntos não são indexados.
*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para leigos');
cursos.add('Algoritmos e lógica de programação')

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Banco de Dados'); // Não será adicionando duas vezes, Set não aceita repetições
cursos.add('Programação Web com Django Framework');



// console.log(cursos);

// Acessando o tamanho do conjunto
// console.log(cursos.size);

// console.log(cursos.has('Banco Dados')); // Retorna true ou false

// Deletar elementos de um conjuntos
// cursos.delete('Programação para leigos');
// console.log(cursos);

let frutas = ['Manga','Uva','Jaca','Uva'];
let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);