/*
array contendo 5 elementos -> n=5

// índices -> posição do elemento no array
[0][1][2][3][4]

//valores em um array
[12]['Geek'][true][41][22] = podemos receber varios tipos em um
array, porém é recomendado ultilizar somente um.

//Detalhes sobre arrays
- Possuem tamanho infinito* (até a memoria do servidor acabar(seu computador, etc...))
- Podemos colocar qualquer tipo de dado

*/

// Forma 1 declaração array 

// var alunos = new Array['Cristina','Joana','Felipe','Jõao']
// console.log(alunos);

// Forma 2 (RECOMENDADA)
var notas = [1,2,3,4,5];
//console.log(notas);

// Criando array vazio
var dados = ['Joana'];
//console.log(dados)

// Fazendo acesso ao valor de um indie
//console.log(notas[2])

// Alterando o valor a partir do Indice
notas[2] = 12;
//console.log(notas)

// ATENÇÃO AO ACESSAR UM VALOR COM ÍNDICE QUE NÃO EXISTE
//notas[9] = 10 // Este índice não existe!
console.log(notas)

if(notas[5] == undefined){
    notas[5] = 54;
}

//console.log(notas[5]); //Undefined
//console.log(notas[6]); //Undefined
//console.log(notas[7]); //Undefined
//console.log(notas[8]); //Undefined
//console.log(notas[9]); //10

//console.log(notas[5]==undefined); //true

//Inserindo elementos no final do array
var nomes = ['Paula','Maria','Julia'];
console.log(nomes);

nomes.push('Vanessa'); // Insere o valor no final do array
console.log(nomes);

// Informa o tamanho do Array
console.log(nomes.length);
var tamanho = nomes.length; 

// Ordena os dados de um array
var alunos = ['Vera','Lucio','Ryan','Mario','Ana','Carla'];
//console.log(alunos);

alunos.sort();//Ordenando array de strings
//console.log(alunos)

var precos = [123.55,43.27,546.27,23.12];
//console.log(precos);

//precos.sort(); // ATENÇÃO ordenação de float nao funciona assim!!!
//console.log(precos);
precos.sort(function(a,b){return a - b}); // Ordena os elementos do array
//console.log(precos);

var idades = [5,2,6,5,44,12,56];
//console.log(idades);

//idades.sort();
//console.log(idades);
idades.sort(function(a,b){return a - b});
//console.log(idades);
 
// Deletando dados de um array
//delete idades[3];
//console.log(idades);

//idades.splice(3, 1) // Apartir do Índice 3, delete um elemento
//console.log(idades)

//idades.splice(3, 0, 56, 89); // A partir do elemento 3, não delete nenhum, e adicione 56,89

//idades.splice(3,1,23); // A partir do 3 elemento, delete 1 e adicione 23
//console.log(idades);

// ITERAR EM UM ARRAY
for(i = 0; i < idades.length; i++){
    //console.log(idades[i]);
}

//REMOVENDO ELEMENTOS DA ULTIMA POSIÇÃO DO ARRAY
//idades.pop(); // remove e retorna o ultimo elemento de um array
//console.log(idades);

//var ret = idades.pop()
//console.log(ret)
//console.log(idades)

//REMOVENDO O PRIMEIRO ELEMENTO DE UM ARRAY

//idades.shift(); // remove e retorna o primeiro elemento do array
//console.log(idades);

//var ret=idades.shift();
//console.log(ret);
//console.log(idades);

// INSERINDO ELEMENTOS NO INICIO DO ARRAY
 //idades.unshift(99);
 //console.log(idades);

 //RETORNA UM NOVO ARRAY APARTIR DO INDICE IFORMADO
 //var novo = idades.slice(3)
 //console.log(novo);

 //var novo = idades.slice(1,2); // a partir do indice 1,pegue até o 2 sem incluí-lo
 //console.log(novo);

 var pares = [2,4,6,8,10,];
 var impares = [1,3,5,7,9];
 
 var rest = pares.concat(impares); // concatena os dois arrays
 //console.log(rest);

 var rest = impares.concat(pares); // concatena os dois arrays
 //console.log(rest);

 var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

/*
    [1  ,2, 3, 4,] // linha 0 
    [5 , 6, 7, 8,] // linha 1
    [9 ,10,11,12,] // linha 2
    [13,14,15,16,] // linha 3
 */

console.log(tabuleiro[1][4]) // linha 1 coluna 4 -> 4
console.log(tabuleiro[3][2]) // linha 4 coluna 3 -> 15