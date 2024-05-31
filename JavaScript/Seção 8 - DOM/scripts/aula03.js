function mostrarAlerta(){
    alert("o botão foi clicado");
}
function mudarTexto(elemento){
    elemento.innerHTML = "Eu estou avisando";
}

function mudarCor(){
    let cores = ['green','red','magenta','purple','blue','yellow','black','orange'];
    let textoCor = ['white','black'];

    const numero2 = Math.floor(Math.random()* textoCor.length);
    const numero = Math.floor(Math.random() * cores.length); 
    document.body.style.backgroundColor = cores[numero];
    document.body.style.color = textoCor[numero2];
}

function escreveTexto(input){
    let span = document.getElementById('texto')

    span.innerHTML=input.value;
}