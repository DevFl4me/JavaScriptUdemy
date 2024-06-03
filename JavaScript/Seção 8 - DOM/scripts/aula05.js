let btn = document.querySelector('button');

btn.onclick = function(){

    //Declara a variável de texto que será adicionado ao parágrafo
    let textElement = '';

    //Recupera o valor do input
    let inputValue = document.querySelector('input').value;

    // Cria um elemento parágrafo <p></p>
    let pElement = document.createElement('p'); // Cria um <p>

    //Adiciona o atributo class ao parágrafo
    pElement.setAttribute('class','class-p');

    //Verifica se o usuario preencheu o input caso contrario coloca texto padrão
    if(inputValue !== ""){ // se valor do input for diferente de vazio
        textElement = document.createTextNode(inputValue);
    }else{
        textElement = document.createTextNode("Veio vazio...."); // se estiver vazio.
    }

    //Adiciona o texto como filho do parágrafo
    pElement.appendChild(textElement);

    // Recupera a div
    let divElement = document.querySelector('#app') // acessa a div #app

    //Adiciona o parágrafo como filho da div
    divElement.appendChild(pElement); // 

    //limpa o input 
    document.querySelector('input').value='';
}

    