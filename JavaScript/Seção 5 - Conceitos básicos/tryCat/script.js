try{
    console.log(nome);
}catch(e){
    console.log("Não foi possível imprimir nome.")
    console.log(e.name);
    console.log(e.message);
}

//Lançando erros
function dividir(num1, num2){
    if(num1 == 0 || num2 == 0){
        throw("Os valores devem ser positivos") // lançando uma excessão(erro)
    }else{
        return num1 / num2;
    }
}

try{
    let ret = dividir (8,0)
    console.log(ret);
}catch(e){
    console.log("Não foi possivel dividir");
}finally{
    console.log("Vamos continuar....");
}
