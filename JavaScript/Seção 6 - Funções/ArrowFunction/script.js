let somar4=(num1,num2) =>{
    return num1+num2;
}

console.log(somar4(4,5));

/*
ATENÇÃO.

caso sua função vá receber apenas um parâmetro de entrada e executa apenas uma linha,
podemos simplificar ainda mais usando Arrow Function.

*/
let dobrar = valor => valor * 2;

console.log(dobrar(5));

function mensagem1(){
    console.log("Evolua seu lado Geek");
}

mensagem1();

const msg = ()=> console.log("Evolua seu lado Geek");

msg();