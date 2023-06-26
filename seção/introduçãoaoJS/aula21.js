/* CONDICINAIS
if: o if(se) é um comando que permite executar um código 
apenas se uma condição entre parênteses for verdadeira (true)
*/
let x = 1; 
if(x == 1) {
    //executar o código
}

let disponivel = true; 
let quantidade = 5; 

if(quantidade > 0 && disponivel) {
    console.log("Produto disponível para venda");
}

/* else: o comando ELSE (senão) serve para executarmos um trecho de código 
quando o IF for falso 
*/
if(noem == "Maria") {
    console.log("Acesso permitido")
} else {
    console.log("Acesso Negado!")
}

/* IF ELSE IF ELSE ... : Caso vocÊ possua muitas condições, pode ficar um 
pouco difícil de ler o código
*/

if(cidade == "Porto Alegre") {
    //código
} else {
    if(cidade == "São Paulo") {
        //código
    } else {
        if(cidade == "Rio de Janeiro") {
            //código
        }
    }
}

/* ELSE IF: Em casos como o anterior, é interessante usar o comando 
ELSE ID (senão se).
*/ 
if (cidade == "Porto Alegre") {
    //código
} else if(cidade == "Sâo Paulo") {
    //código
} else if (cidade == "Rio de Janeiro") {
    //código 
} else {
    //código
}