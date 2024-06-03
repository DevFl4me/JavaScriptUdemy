// let itexto = document.getElementById('produto');

// console.log(itexto);

// let spans = document.getElementsByTagName('span');
// console.log(spans);

// let elementoscomClasse = document.getElementsByClassName('texto')
// console.log(elementoscomClasse)

// LER VALORES 
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML)

// ALTERAR VALORES
// spans[0].textContent = 'JavaScript';
// // spans[1].innerHTML = 'Geek University';

// let span = document.getElementsByName('span');
// // console.log(span.innerHTML);
// span.style.textTransform = 'uppercase';

// let inp = document.querySelector('input') // busca pela tag
// let eles = document.querySelectorAll('.texto') // busca todos elementos da classe 

// let div1 = document.querySelector('#div1') // busca elemento pelo ID

// let inp = document.querySelector('input[name=produto]')

// console.log(inp);


// Exemplo 1
// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('botão clicado.....');
// }

// Exemplo 2
let btn = document.querySelector('button.btn')

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}
