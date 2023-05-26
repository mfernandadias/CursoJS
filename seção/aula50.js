//atribuição via desestruturação (arrays) 

/*let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//atribuição via desestruturação
const numeros = [1, 2, 3];
[a, b, c] = [1, 2, 3];

console.log(a, b, c); */

//... rest, ... spread 
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiro, segundo, terceiro,...resto] = numeros;
console.log(primeiro, segundo, terceiro);
console.log(resto); */
 /*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um , , tres, , cindo, , sete] = numeros; 
console.log(um,tres, cindo, sete ); */

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[, , seis]]  = numeros;
console.log(seis);