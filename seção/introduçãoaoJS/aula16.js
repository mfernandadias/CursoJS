//funções: as funções são utilizadas para criarmos uma sequencia de operações 
//para serem executadas. 

let olaMundo = function() {
    console.log("Olá Mundo");
    console.log("Olá Mundo novamente");
    console.log("Olá Mundo mais uma vez");
}

olaMundo();

//note que para fazer a função executar, você precisa chama-la 
//com as parênteses 

//outra forma de criar uam função é chamando o funcion com o nome dela.

/*function olaMundo() {
    console.log("Olá Mundo");
    console.log("Olá Mundo novamente");
    console.log("Olá Mundo mais uma vez");
}
olaMundo();*/

//também é possível passar valores para a função acessar 
let somar = function(valor1, valor2) {
    let resultado = valor1 + valor2;
    console.log(resultado);
}

somar(1, 2);
somar(4, 4);
somar(99, 1);

//o último recurso que estaremso vendo da função (por enquanto) é o comando
//return.

let somar2 = function(valor1, valor2){
    let resultado = valor1 + valor2;
    return resultado;
}

//a primeira coisa que você precisa saber. O return para a função e 
//devolve um valor. 

//então, estes estão corretos: 
let somar3 = function(valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado;
}
//let resultado = somar3(15, 10)

let subtrair = function(valor1, valor2) {
    console.log(valor1 - valor2);
    return valor1 - valor2;
}

//agora que você sabe como usar o return, vamos falar sobre a utilidade dele: 
let somar5 = function(valor1, valor2) {
    return valor1 + valor2;
}
let resultado1 = somar5(10, 10)

//o return faz com que a função seja uma ferramente excelente para tornamos  
//nosso código mais simples de entender 
//conforme formos avançando no curso, você verá que utilizamos bastante as 
//funções em nosso código 
//CURIOSIDADE: caso você não coloque o return, por default as funções devolvem 
//undefined.