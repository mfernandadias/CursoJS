/* complete a função testarTamanho de forma qeu quando for passada um numero, 
ela faça o seguinte: 
retorne o texto "maior" se for maior que 15 
retorne o texto "menor" se for menor que 3 
retorne o texto "na faixa" se for maior ou igual que 3 e menor ou igual a 15 
*/

function testarTamanho(valor) {
    if(valor > 15) {
        return "maior";
    } else if(valor < 3) {
        return "menor";
    } else if(valor >= 3 && valor <= 15){
        return "na faixa";
    }
}