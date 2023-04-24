//valores primitivos e valores por referência

/*
PRIMITIVOS (imutáveis) - string, number, boolean, undefined, 
null(bigint, symbol) - valores copiados 

REFERÊNCIA (mutável) - Array, object, function
passados por referência
*/
//strings são indexadas em JavaScript
//          0123
/*let a = 'A';      //
let b = a;       //cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

/*let a = [1, 2, 3];
let b = [...a]; 
let c = b;

console.log(a, b);


a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);*/

const pessoa = {
    nome: 'Luiz',
    sbrenome: 'Otávio'
};

const b = a; 

a.nome = 'João';
console.log(b);
console.log(b);







