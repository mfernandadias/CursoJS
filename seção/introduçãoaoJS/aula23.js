/* Condicinais
SWITCH: o switch serve para executar um c´digo de acordo com diversos 
possíveis resultados. 
*/

switch(codigo) {
    case 50: 
        console.log("Banana");
        break;
    case 9540: 
        console.log("Limão");
        break; 
    default: 
        console.log("Desconhecido");
        break;
}

/* switch: o swtch é a alternativa perfeita ao if/else caso existeam muitas 
comparações de um valor. 
*/

/* Case: como você pode ver pelo wxemplo, para cada possibilidade, é 
necessário termos um "case". */

/* break: o comando "break" serve para encerrar a leitura do switch. Sem 
ele código do case abaixo será executado */

/* default: o default é nosso "else" e executará qaundo nenhum case 
correnponder ao valor.*/

/* comparação: o switch compara usando o ===, então tanto o valor quanto o 
tipo do dado precisam ser iguais*/