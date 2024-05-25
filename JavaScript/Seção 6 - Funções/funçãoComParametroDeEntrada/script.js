function calcular_idade1(ano_nascimento){
    const data = new Date() // gera a data atual completa

    // getFullYear() pega apenas o ano da data atual 
    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date()
    const idade = data.getFullYear() - ano_nascimento;
    console.log(idade)
}

//console.log(calcular_idade1(2001));

//calcular_idade2(2000);

const data = new Date();

console.log(`data completa: ${data}`);// data completa
console.log(`data completa: ${data.getFullYear()}`);// apenas o ano atual
console.log(`data completa: ${data.getMonth()}`); // janeiro começa com 0, e 1 pra fevereiro.....

function somar(num1,num2){
    return num1+num2;
}

console.log(somar(8,2)) //10
console.log(somar(8))//NAN = NOT A NUMBER, tem apenas um parametro inserido
console.log(somar(4,6,4,6,7,8))// vai executar apenas 2 parametros como destacado na função