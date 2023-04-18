//mais sobre Strings

//strings são indexadas
/*
Em JavaScript, strings são indexadas, 
o que significa que cada caractere de uma string 
pode ser acessado usando um índice numérico. 
Por exemplo, você pode acessar o primeiro caractere 
de uma string usando o 
índice 0, o segundo caractere usando o índice 1 e assim por diante.

No entanto, como strings em JavaScript são consideradas 
"imutáveis", o que significa que uma vez que uma string é criada, 
ela não pode ser alterada. Se você precisar alterar o valor de uma
 string existente, na verdade você está criando uma nova string que 
 substitui a antiga.
*/
   //            01234567
let umaString = "o rato roeu a roupa do rei de roma";

//console.log(umaString[-7]);

/*console.log(umaString.concat('em um lindo dia'));
//console.log(umastring + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia`); */

//console.log(umaString.indexOf('Texto'));

//console.log(umaString.replace(/r/g, '#'));

//console.log(umaString.length);    

//console.log(umaString.slice(2, 6));

/*
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length - 1));
*/
//console.log(umaString.charAt.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

