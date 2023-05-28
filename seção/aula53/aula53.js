//exercícios com for 
const elementos = [ 
    { tag: 'p', texto: 'Frase 1'},
    { tag: 'div', texto: 'Frase 2'},
    { tag: 'footer', texto: 'Frase 1'},
    { tag: 'section', texto: 'Frase 4'},
]; 
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let p = document.createElement(tag);
    //tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);

    tagCriado.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);