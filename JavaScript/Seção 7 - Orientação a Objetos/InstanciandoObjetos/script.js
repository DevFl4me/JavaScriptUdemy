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


// INSTANCIAÇÃO DE OBJETOS - FORMA 2
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
console.log(programa.fabricante.contato);//contact@adobe.com
console.log(programa.fabricante.filiais)//