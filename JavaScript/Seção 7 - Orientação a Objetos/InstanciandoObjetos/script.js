class Pessoa{
    constructor(nome,sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
//--------------------------------------------------------
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome=sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`)
    }
    comer(){
        console.log(`${this.nome} esta comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo.....`)
    }
}

class Carro{
   constructor(modelo){
    this._marca = "Honda";
    this._modelo = modelo;
   }

   get marca(){
        return this._marca;
   }
   set marca(marca){
    this._marca = marca;
   }
//---------------------------------------------------------------
   get modelo(){
    this._modelo = modelo;
   }
   set modelo(modelo){
    this._modelo = modelo;
   }

   imprimir(){
    console.log(`${this.marca} ${this.modelo}`);
   }

}

// INSTANCIAÇÃO DE OBJETOS - FORMA 1

const curso = new Object();
curso.nome = "Programação em JavaScript";
curso.preco = 27.99;

//console.log(curso);
curso["qtd_alunos"] = 999;

//console.log(curso);

// Deleta atributos
// delete curso.preco;
// delete curso.nome;
// delete curso. qtd_alunos;


// INSTANCIAÇÃO DE OBJETOS - FORMA 2 Literal
const programa = {
    nome:"Photoshop",
    preco:999.99,
        fabricante:{
            nome:"Adobe",
            contato:"contact@adobe.com",
        endereco:{
            rua:"Da paz, 45",
            bairro:"Nova Lima",
            cidade:"São Paulo",
        },
        filiais:[
            {cidade:"Rio de Janeiro"},
            {cidade:"Recife"}
        ]
        }
}
// console.log(programa);

console.log(programa.nome);//Photoshop
// console.log(programa.fabricante.contato); contact@adobe.com
// console.log(programa.fabricante.filiais)

// programa.nome = "Playstation OS"

// console.log(programa.nome);

// delete programa.fabricante.filiais; // deletando array Filiais

// console.log(programa.fabricante.filiais) //undefined;
// console.log(programa.fabricante.filiais.length) // Type Error

// INSTANCIAÇÃO DE OBJETOS - FORMA 3 Literal

// const pessoa = {}

// //console.log(typeof(pessoa))

// pessoa.nome = "Angelina";

// console.log(pessoa)


// INSTANCIAÇÃO DE OBJETOS - FORMA 4 Função construtora

// function lampada(cor){
//     this.cor = cor;
// }

// const l1 = new lampada("Branca");

// console.log(l1)
// console.log(typeof(l1))


// INSTANCIAÇÃO DE OBJETOS - FORMA 4 APARTIR DAS CLASSES
const p1 = new Pessoa("Fl4mier","Killer");

console.log(p1);
console.log(typeof(p1));
console.log(p1.nome); // Função GET
console.log(p1.sobrenome);// Função GET

p1.nome = "Jõao";
console.log(p1.nome)

p1.falar("Vem aqui baixinho...");
p1.comer();
p1.beber();