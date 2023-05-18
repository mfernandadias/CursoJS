const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return; 
    }

    const imc = getImc(peso, altura);

    console.log('imc');
    //constinua o código...

});
//função 
function getImc (peso, altura){
    const imc = peso / altura ** 2; 
    return imc.toFixed(2);

}

//tarefa dessa função é criar um p 
function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ' ';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}