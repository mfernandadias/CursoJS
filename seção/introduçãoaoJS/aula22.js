/* condicinais: 
Escopo: o bloco de escopo é definido pela região ao qual variáveis e outros 
dados são visíveis. 
*/

let numero = 1; 
if(numero == 1) {
    let texto = "olá";
    //acessando a variavel número
    numero = 2;
}

//erro de escopo
console.log(texto);

/* 
escopo global: Uma variável declarada fora de uma função, 
torna-se global e todos os scripts e funções em uma página da 
Web podem acessá-la 
*/

    let valor = 12; 

    let umaFuncao = function() {
        console.log(valor);
    }

    if(valor == 12) {
        umaFuncao();
        console.log(valor);
    }

    /* escopo de bloco: variáveis declaradas dentro de um local cercado por {}
    */

    let varGlobal = 1; 
    function funcaoGlobal() {
        let varFuncao = varGlobal + 1; 

        function funcaoLocal() {
            let varFuncLocal = varFuncao + varGlobal;
            console.log(varFuncLocal);
        }
    }

    /* Escopo de bloco: Estas variáveis nãp podem ser acessadas fora de 
    seu escopo */
    let varGlobal1 = 1; 
    function funcaoGlobal() {
        let varFuncao = varGlobal + 1;

        function funcaoLocal1() {
            let varFuncLocal1 = varFuncao + varGlobal1;
            console.log(varFuncLocal1);
        }
    }

    /* var: o var só posui escopo global e de loco para funções.*/
     let x = 1; 

     if(x == 1) {
        var y = 99;
     } 
     console.log(y);