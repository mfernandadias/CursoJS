/* crie uma estrutura de controle (if ou switch) dentro da função mudarPropriedade
que efetue a lógica pedida nos comentários 
dica: se precisar, reveja as aulas de switch e if/else; não esqueça do break; 
os case precisam ter strings com letras minusculas  
*/
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};
function mudarPropriedade(nomePropriedade, novoValor) {
    switch(nomePropriedade) {
        //o cse rodas é um exemplo para as próximas partes 
        case "rodas": 
        if(novoValor > 1){
        carro.rodas = novoValor;
        } else { 
            return "Minino de rodas precisa ser 2";
        }
        break;
        case "portas":
            if(novoValor > 0) {
                carro.portas = novoValor;
            } else{
                return "Minino de portas precisa ser 1";
            } break;
        case "cor":
            if(novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
                carro.cor = novoValor;
            } else{
                return "Cor invalida";
            }
            break;

        case "ano":
            carro.ano = novoValor; 
            if(novoValor == 2019){
                carro.estado = "novo";
            }else{
                carro.estado = "usado";
            }
            break;
            default:
                //retornar a frase "propriedade invalida"
                return "Propriedade invalida";
    }
    //retornar a frase Alteração concluida somente se foi possivel 
    //alterar um dado do objeto 
    return "Alteração concluida";
}