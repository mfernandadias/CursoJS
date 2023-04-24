     //exercício para função, array e objetos 
    //IIFE 
/*function meuEscopo () {
    const form = document.querySelector('.form');

    let contator = 1; 
    function recebeeventoForm(veneto) {
       evento.prevetDefault();
       console.log('Form não foi enviado ${contador');
       contador++;
    }

    form.addEventListener('submit', recebeEventoForm);
}
 meuEscopo();*/
 
   //anotação de evento
  /*form.onsubmit = function (evento) {
        evento.preventDefault();
         alert(1);
         console.log('Foi enviado.');
    };*/

 //evento de atualizar a páginar

 function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); 

        const nome = form.querySelector('.nome');
        const sobrenome  = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` 
         + 
        `${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
 }
 meuEscopo();