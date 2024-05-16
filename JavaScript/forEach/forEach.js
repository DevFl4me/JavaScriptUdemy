var cursos = [
    'Programação para Leigos',
    'Algoritmos e lógica de Programação',
    'Programação em C',
    'Programação em java',
    'Programação em Phyton',
    'Banco de Dados',
    'Programação web com Django Framework',
    'Programação JavaScript',
];

//console.log(cursos);
//console.log(cursos.length);

//Definir uma função


function imprimir(curso,indice){
    console.log(`${indice} - ${curso}`);
}

//Para cada
// cursos.forEach(imprimir);

// ULTILIZANDO DE UMA FUNÇÃO ANÔNIMA (LAMBDA/CALLBACK) E TEMPLATE STRING
cursos.forEach(function(curso,indice){
    console.log(`${indice} - ${curso}`);
})