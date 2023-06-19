/*null: o null é um tipo de dado especial, ele represena a falta de valor 
de qualquer outro tipo de dado.
*/
let x = null; 

let y = 1; 
y = null; 

/*
Undefined: Este tipo de dado aparece quando criamos uma variável e tentamos 
acessar seu valor antes de ter atribuído algo a ela 
*/

let m;
console.log(m); 

/*
undefined !== Null: undefined e null são diferentes.
*/
console.log(null === undefined);

//resumidamente, isto ocorre pois null ainda é um valor e undefined é quando 
//o JavaScrip não sabe qual o tipo de dado.
