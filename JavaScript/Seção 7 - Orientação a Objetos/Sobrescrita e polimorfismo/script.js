/*
Funcionarios
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro,
clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda 
funções
    descricao
    salario        
*/

class Funcao{
    constructor(descricao,salario){
        this.descricao = descricao;
        this.salario = salario;
    }
    get descricao(){
        return this._descricao;
    }
    set descricao(descricao){
        this._descricao = descricao;
    }
    //----------------------------------------------
    get salario(){
        return this._salario;
    }
    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome,sobreNome,email,cpf){
       this._nome = nome;
       this._sobreNome = sobreNome;
       this._email = email;
       this._cpf = cpf; 
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    //-----------------------------------
    get sobreNome(){
        return this._sobreNome;
    }
    set sobreNome(sobreNome){
        this._sobreNome = sobreNome;
    }
    //---------------------------------------
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    //-----------------------------------------
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    // Métodos extras
    get nome_completo(){
        return this._nome + ' ' +this._sobreNome;
    }
    set nome_completo(nome_completo){
        //Transforma a string em um array onde cada elemento do array será as partes da strign separadas por espaço
        nome_completo = nome_completo.split(' ');

        // Remove e retorna o elemento da posição 0 do array
        this._nome = nome_completo.shift();

        //Junta os elementos do array em uma string separando cada elemento por espaço
        this._sobreNome = nome_completo.join(' ');
    }
    imprimir_dados(){
        console.log(`${this._nome} ${this._sobreNome}`);
    }
}

class Funcionario extends Pessoa{
    constructor(nome,sobreNome,email,cpf,funcao,registro){
        super(nome,sobreNome,email,cpf); // HERDANDO ATRIBUTOS E METODOS DA CLASSE PESSOA
        this._funcao = funcao;//FUNCAO E REGISTRO NAO ESTÃO NA CLASSE PESSOA, ENTÃO DEVEM SER SETADOS
        this._registro = registro;//FUNCAO E REGISTRO NAO ESTÃO NA CLASSE PESSOA, ENTÃO DEVEM SER SETADOS
    }
    get funcao(){
        return this._funcao;
    }
    set funcao(funcao){
        this._funcao = funcao;
    }
    //-----------------------------------------------
    get registro(){
        return this._registro;
    }
    set registro(registro){
        this._registro = registro;
    }
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro}  Salario: R$${this.funcao.salario}`)
    }
}

class Cliente extends Pessoa{
    constructor(nome,sobreNome,email,cpf,renda){
        super(nome,sobreNome,email,cpf)
        this._renda = renda;
    }
    get renda(){
        return this._renda;
    }
    set renda(renda){
        this._renda = renda;
    }
}

// const c1 = new Cliente("Ryan", "Pablo","ryanpablobarbosa@gmail.com","076.222.231-56",6789.44);
// const c2 = new Cliente("Jõao", "Paulo","joaopaulo@gmail.com","055.231.251-22",8789.44);

// // console.log(c1);
// // console.log(c2);

// // console.log(c1.nome_completo);
// // console.log(c2.nome_completo);

// // c1.nome_completo = 'Julio da Silva';
// // console.log(c1);

// c2.imprimir_dados();

const programador = new Funcao("Programador",4899.54);
const suporte = new Funcao("Suporte",2799.54);



const f1 = new Funcionario("Ryan","Pablo","ryan@gmail.com","076.222.131-43",programador,"QGBB23");
const f2 = new Funcionario("Maysa","Rodrigues","maysa@gmail.com","076.222.131-43",suporte,"QGBB13");

// console.log(f1);
// console.log(f2);
// console.log(f1.funcao.salario);
// f1.imprimir_dados();

const prog = new Funcao("Programador",5977.44);
const f3 = new Funcionario("Tatiana","Barbosa","ryan.p.pinto@gmail.com","122.322.455-56", prog, "f99jk2");

const c2 = new Cliente("Pedro","Silveira","pedro@gmail.com","983.556.764-12",4355.55)

f3.imprimir_dados(); // Pessoa
c2.imprimir_dados(); // Pessoa

/*
Sobrescrita de método = Overwriting.

-Polimorfismo - Dois objetos do mesmo tipo, tendo comportamentos diferentes.
*/