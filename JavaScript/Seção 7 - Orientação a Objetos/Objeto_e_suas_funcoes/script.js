const curso = {
    nome: "Programação em Javascript",
    horas: 25,
    preco: 27.99
}

// console.log(curso)

// console.log(typeof(curso))

// console.log(Object.keys(curso)); // mostra todos os atributos do objeto escolhido!
// console.log(Object.values(curso));//Imprime os valores dos atributos!
// console.log(Object.entries(curso)) // Imprime todos atributos e valores do objeto!
// console.log(Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`)
// }))

// Object.entries(curso).forEach(([chave,valor]) =>{
//     console.log(`${chave}: ${valor}`)
// });]

// curso.nome = "Criação de API Rest com Django Rest Framework";

// console.log(curso);

// Object.defineProperty(curso,'publicacao',{  // CRIA UM ATRIBUTO DENTRO DO OBJETO QUE NÃO PODE SOFRER ALTERAÇÕES!!
//     enumerable:true,
//     writable: false,
//     value:"07/12/2024"
// });

// curso.publicacao = "01/01/2021", // EXEMPLO, NÃO PODE ALTERAR DEVIDO AO "WRITABLE = FALSE"

// console.log(curso);

// Object.freeze(curso); // Faz o mesmo que Writable = false.
// curso.nome = "Dança da Garrafa";
// console.log(curso)

const usuarios = [
    {nome : "Aline Moraes", empresa : "Geek Universisty"}, 
    {nome : "Ryan Pablo", empresa : "Google"}, 
    {nome : "Felipe Xavier", empresa : "Sony"}, 
]
console.table(curso);
console.table(usuarios);