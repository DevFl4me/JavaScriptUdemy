// Escreva uma função  expect. Deve aceitar um número inteiro inicial  val. Deve retornar um objeto com três funções.

// toBe(val) aceita outro valor e retorna  true se os dois se valorizarem  === . Se eles não forem iguais, deverá ocorrer um erro  "Not Equal".
// notToBe(val) aceita outro valor e retorna  true se os dois se valorizarem  !== . Se eles forem iguais, deverá gerar um erro  "Equal".

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   
    // Cria um novo objeto
    let object = {};
    
    // Adiciona o método toBe ao objeto
    object.toBe = function(tobe) {
        if(tobe === val) {
            return true;
        } else {
            throw new Error("Not Equal"); // Corrige a criação do erro
        }
    };

    // Adiciona o método notToBe ao objeto
    object.notToBe = function(ntb) {
        if(ntb != val) {
            return true;
        } else {
            throw new Error("Equal"); // Corrige a criação do erro
        }
    };

    // Retorna o objeto com os métodos
    return object;
};

// Testando o código
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(3)); // true
// console.log(expect(5).toBe(3)); // Lançará o erro "Not Equal"
// console.log(expect(5).notToBe(5)); // Lançará o erro "Equal"
