// Ajax (XMLHTTPRequest) - Asynchronous JavaScript and XML.

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function(){
    //Limpar conteudo da div
    div.innerHTML = '';

    // INSTANCIANDO OBJETO AJAX
    let ajax = new XMLHttpRequest();

    // ABRIR UMA CONEXÃO (GET(pega dados),POST(envia dados),PUT,DELETE)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // ENVIAR A REQUISIÇÃO
    ajax.send(null);

    ajax.onreadystatechange = function(){
        // Criar elemento span
        let spanNone = document.createElement('span');

        // Criar uma variável nome
        let txtNome = '';

        /* 
        ajax.readyState -> 0 => Antes da conexão ser aberta
        ajax.readyState -> 1 => Após abrir a conexão
        ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
        ajax.readyState -> 3 => Carregando corpo da requisição (conteudo/dados)
        ajax.readyState -> 4 => O contéudo (dados) está pronto para uso
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
               // transformar os dados JSON para array
               usuario = JSON.parse(ajax.responseText); 

               // Se o usuario possuir nome
               if(usuario['name'] != null){
                txtNome = document.createTextNode(usuario['name']);
                
                let img = document.createElement('img');
                img.setAttribute('src', usuario['avatar_url']);
                img.setAttribute('alt',usuario['name']);
                img.setAttribute('width', '80px');
                img.setAttribute('height', '80px');

                div.appendChild(img);
               }else{
                txtNome = document.createTextNode(`O usuario não tem nome ${input.value}`);
               }
               // Adiciona o texto ao span e o span a div
               spanNone.appendChild(txtNome);
               div.appendChild(spanNone)

               // Limpar o input
               input.value = '';
            }else{
                txtNome = document.createTextNode(`Não encontrei o usuario ${input.value}`);
                // Adiciona o texto ao span e o span a div
               spanNone.appendChild(txtNome);
               div.appendChild(spanNone)
            }
        }
    }
}