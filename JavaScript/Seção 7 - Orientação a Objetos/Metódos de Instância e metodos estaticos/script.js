class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`); 
    }
    
    static retornar_marca(){
        return "Honda";
    }

}

// const fit = new Carro("Fit");

// fit.imprimir_dados();

console.log(Carro.retornar_marca());

// Object.defineProperty();
console.log(Math.random()); // Gera números aleatorios

console.log(Math.PI);

class Pessoa{
    constructor(nome,sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this._nome} ${this._sobrenome} está andando...`);
    }
    correr(){
        console.log(`${this._nome} ${this._sobrenome} está correndo...`);
    }
}

const p1 = new Pessoa("Ryan","Pablo");
const p2 = new Pessoa("Jõao","Felicio");

console.log(p1);

p1.andar();
p2.correr();