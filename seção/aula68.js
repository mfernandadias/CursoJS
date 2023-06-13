//as várias maneiras de declarar funções em JavaScript 
//function hoisting
falaOi();

function falaOi() {
    console.log('Oie');
}

//first-class ojects (objetos de primeirs classes) 
//function expression 
//const souUmDado = function() {
 //   console.log('Sou um dado.');
//};
//souUmDado();

/*function executaFunsao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);*/
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

//arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//dentro de um objeto 
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar();