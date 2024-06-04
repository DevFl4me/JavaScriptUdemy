// 1- Temos que referenciar o input
  let input = document.querySelector('input[name=tarefa]')
console.log(input)

// 2- Temos que referenciar o button
  let btn = document.querySelector('#botao')
  console.log(btn)

// 3- Temos que referenciar a lista
 let lista = document.querySelector('#lista')
 console.log(lista)

 //Card
 let card = document.querySelector('.card');

 let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] ;
   

 function renderizarTarefas(){
    //Limpa a lista antes de renderizar novamente
    lista.innerHTML='';

    for(let tarefa of tarefas){
        //Criar o item da lista
        let itemLista = document.createElement('li')

        //Adicionando Classe ao item da lista
        itemLista.setAttribute('class','list-group-item list-group-item-action');

        //Adicionar evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this)
        }

        //Criar um texto
        let itemTexto = document.createTextNode(tarefa);

        // Adicionando o texto no item da lista
        itemLista.appendChild(itemTexto);

        // Adicionando o item da lista na lista
        lista.appendChild(itemLista);
    }
 }


//Executando a função para renderizar as tarefas
renderizarTarefas();

                    //PARTE 02

// 1 - Precisamos escutar o evento de click no botão
 btn.onclick = function(){
    // 2- Precisamo capturar o valor digitado pelo usuario no input
    let novaTarefa = input.value;

    if(novaTarefa != ""){
         // 3- Precisamos atualizar a nova tarefa na lista (array) de tarefas e renderizar a tela
    tarefas.push(novaTarefa);

    //Executando a função para renderizar as tarefas
    renderizarTarefas();

    // Limpar o input
    input.value = '';
    
    // Remover mensagens de erro (Spans)
    removerSpans();

    // Salva os novos dados no banco de dados (Storage)
    salvarDadosNoStorage();

    }else{
         // Remover mensagens de erro (Spans)
        removerSpans();

        let span = document.createElement('span');
        span.setAttribute('class','alert alert-danger');

        let msg = document.createTextNode('Você precisa informar a tarefa!');

        span.appendChild(msg);

        card.appendChild(span);
    }

   
 }

 function removerSpans(){
    let spans = document.querySelectorAll('span');

    for(let i = 0 ; i<spans.length ; i++){
        card.removeChild(spans[i]);
    }
 }

function deletarTarefa(tarefa){
    // Remove a tarefa do array 
    tarefas.splice(tarefas.indexOf(tarefa.textContent),1);

    // Renderiza novamente a tela
    renderizarTarefas();

    // Salva os novos dados no banco de dados (Storage)
    salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    // Todo navegador WEB possui esta capacidade
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}

