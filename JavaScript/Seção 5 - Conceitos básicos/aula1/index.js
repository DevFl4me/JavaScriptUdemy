function gritar(){
alert("aaaaaaaaaaaaaaaaaaaaaa")
}
function perguntaNome(){
    var nome;
    nome = window.prompt("Me diga seu nome:")
    alert(`olá ${nome}`);
}
function mudaTexto(){
    var mudaTexto = document.querySelector("#tittle");
    mudaTexto.innerHTML="<h1>Evolua seu lado Geek</h1>";

}
function incrementaNumero(){
    var incrementaNumero = document.querySelector("#numero");

    incrementaNumero.innerHTML = parseInt(incrementaNumero.innerHTML) + 1;
}
function decremento(){
    decrementaNumero = document.querySelector("#numero");

    decrementaNumero.innerHTML = parseInt(decrementaNumero.innerHTML) - 1;
}