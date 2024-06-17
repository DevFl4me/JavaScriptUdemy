// Rest/Spread (Junstar/Espalhar valores) ->...

// function total(...precos){ // é convertido como array, com isso podemos ultilizar
//                            // o forEach.
//     let total = 0;
//     precos.forEach(p => total += p);
//     return total;
// }

// console.log(total(23.44,22,3.45,5.67).toFixed(2));


// console.log(total(23,67));
// console.log(total(3,6,77));
// console.log(total()); // Retorna 0 pois total foi inicializado com 0.


// let frutas1 = ['manga', 'Uva', 'Melância'];
// let frutas2 = ['Abacate', 'Morando','Jaca'];

// let cesta = [...frutas1,...frutas2];

// console.log(cesta);


alunos = ['Paula','Felipe','Fernanda'];
novo = 'Joana';

// alunos.push(novo);

let todos = [...alunos,novo]

console.log(todos);