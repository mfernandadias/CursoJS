// Definindo a função combinandoNomesPokemons
function combinandoNomesPokemons(palavra) {
    var palavraPokemon = palavra + "saur";
    return palavraPokemon;
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);