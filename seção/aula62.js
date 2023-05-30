//exercícios com lógica de programação - 03 
/* escreva uma funçao que recebe um número e retorne o seguinte: 
número é divisível por 3 = fizz 
número é divisivel por 5 = buzz 
número é divisivel por 3 e 5 = fizzbuzz 
número não é divisivel por 3 e 5 = retorna o próprio número 
checar se o número é realmente um número 
use a função com números de 0 a 100
 */

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    return numero;
}


for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
} 

