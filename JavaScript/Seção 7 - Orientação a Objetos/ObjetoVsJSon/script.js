// JSON - JavaScript Object Notation

const curso = {
    nome: "Programação em Javascript",
    horas: 27,
    preco(){
        return this.horas*0.67
    }
}
console.log(curso) // OBJETO JAVASCRIPT
// console.log(curso.preco())
// console.log(typeof(curso))

//CONVERTENDO O OBJETO JAVASCRIP PARA JSON
const json = JSON.stringify(curso);
console.log(json)//JSON
console.log(typeof(json));

//CONVERTENDO DE JSON PARA OBJETO JAVASCRIPT
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));

// AS CHAVES DO JSON SEMPRE ESTARÃO EM ASPAS DUPLAS ""!!!!!!!!!!!!