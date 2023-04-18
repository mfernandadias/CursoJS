/*como eu faço um código animado 
let varA = 'A' valer valor de B, 
let varB = 'B' valer C, 
e let varC = 'C' valer valor 'A'. em código de JavaScript */

//maneira antiga
/*let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let temp = varA; 
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);
*/
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);