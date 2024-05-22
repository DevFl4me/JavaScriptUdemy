// MAP ELE PERCORRE UM ARRAY, GERA OUTRO ARRAY E TAMBÉM PODE SER USADO PARA TRANSFORMAR
// No  exemplo abaixo, foi criado um array "valores" e atribuido 4 índices.
// Abaixo foi criado uma função multiplica ultilizando o .map, que multiplica cada elemento do array e transforma em outro
var valores = [2,4,6,9,10];

var multiplica = valores.map(function(valor){
    return valor*2;
})
console.log(multiplica);

var divide = valores.map(function(valor){
    return valor / 2;
})
console.log(divide);

