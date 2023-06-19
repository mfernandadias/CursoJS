//tipos de dados 
/*array (vetor): é uma lista ou coloção de dados 
que pode ser acessada por índice.
Para criar um vetor vazio basta criar uma variável e atribuir [] a ela. 
*/
let vetor = [];
/*
Atribuindo valores: você pode criar um vetor com seus valores separados 
por vírgula.
*/
let vetor1 = [1, 22, 0, 100];

/*
Você pode adiconar valores de qualquer tipo no vetor.
*/
let vetor2 = [1, "Olá Munco", true, [1, 2, 3]];

//acessando valores: Os valores podem ser acessados através de seu índice.
let vetor3 = [1, 22, 0, 100];
//exibira 22
console.log(vetor[1]);
/*
Observe que i índice começa no 0. Então o primeiro item está na posição 0, 
o segundo na posição 1 e asssim por diante. 
*/

/*
alterando e atribuindo valores pelo índice: Com o índice, você pode: 
a) alterar um valor existente 
b) inserir um novo valor em uma posição específica 
*/

let valor = [11, 21, 23, 433, 50];

//altera o valor da primeira posição 
vetor[0] = 9000; 

//inserir um valor na após p ultimo elemento 
vetor[5] = 7;


