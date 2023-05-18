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
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    //constinua o código...

});
/*
menos do que 18.5 abaixo do peso 
entre 18.5 e 24,9 peso normal 
entre 25 e 29.9 sobrepeso 
entre 30 e 34.9 obesidade grau 1 
entre 35 e 39.9 obesidade grau 2 
mais do que 40 obesidade grau 3
*/
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso norma', 'Sobrepeso', 
     'Obesidade gra 1', 'Obesidade grau 2', 'Obesidade grau 3'];
     if(imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3];
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    

}

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

    if(isValid) 
    { p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}