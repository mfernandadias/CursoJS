//tipos de dados 
//Strings 
/*
São valores de texto, normalmente chamados de "cadeias de caracteres":
*/
let olaMundo = "Olá Mundo";
//Você precisa utilizar aspas simples ' ou aspas duplas " " para 
//encapsular a String

let olaMundo2 = "Olá Mundo";
let olaMundo3 = 'Olá Mundo';

/*
Caracteres Especiasi - Para adicionar caracteres especiasi (', ", &, 
quebra de linha e etc.) utilizamos a barra invertida.
*/

let caracteresEspeciasi = "Lores \n Ipsum \\ dolor \' \" amet";
/* 
\n: Nova Linha 
\\: exibe a\ 
\': exibe ' 
\": Exibe ""
*/

//contaneção de Strings: Você pode unir (concatenar) Strings de diversas fomas 

/*
1) Utilizando o sinal de + 
*/
let ola = "Olá";
let mundo = "mundo";

let olaMundo4 = ola+mundo;
//console.log = olaMundo4;

/* 
2) Utilizando o String.concat
*/
let ola1 = "Olá";
let mundo2 = "Mundo";

let OlaMundo = ola.concat(mundo);

//eestes método também permite concatenar diversas strings

let ola4 = "olá";
let mundo4 = "Mundo";

let olaMundo5 = ola.concat(mundo, " frase ", ola);

/*
3) Template de Strings: O template de Strings é uma nova forma de concatenação
e utiliza o ${expressão} e a crase ao redor da string  
*/
let ola6 = "Olá";
let mundo5 = "Mundo";

let olaMundo6 = `${ola} ${mundo} ${1+1}`;
