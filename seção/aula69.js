//parâmetros de função 
/*function funcao() {
    console.log(arguments[0, 1, 2]);
}
funcao('Valor', 1, 2,3, 4, 5, 6, 7, 8, 9);
*/

/*function funcao() {
    let total = 0; 
    for (let argumento of arguments) {
        total += argumento;
     }
     console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);*/

//argumentos que sustenta todos os argumentos enviados 
/*function funcao(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g);
} funcao(1, 2, 3);*/

/*function funcao(a, b) {
    b = b || 0;
    console.log(a + b);
}
funcao(2);*/

/*function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);*/

/*function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Luiz Otávio', 'Miranda', 30]);*/

/*function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50); */

/*const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
        }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);*/

const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta('+', 1, 20, 30, 40, 50);

