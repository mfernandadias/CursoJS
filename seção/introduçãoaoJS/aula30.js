//while: este loop funciona de dorma bem simples. enquanto (while) a condição 
//for true, executa o código. 

let num = 1; 
while(num < 10){
    console.log("valor:" + num);
    num = num + 2;
}

/*lembre que você precisa fornecer uma forma para que o loop termine, caso 
contrário terá um loop infinito. 
*/

/* do while: similar ao while, o do while executa um trecho de código e depois  
testa se o executará novamente. 
*/
let num1 = 1; 
do { 
    console.log(num);
    num++; 
}
while(num < 10);


let num2 = 1; 
while(num < 10){
    console.log(num);
    num++;
}