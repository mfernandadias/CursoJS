/* for of: este loop é especifico para iterar entre os elementos de uma lista. */
let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];

for(let dia of dias) {
    console.log(dia);
}

//você pode ler ele como "para cada item de uma lista". No exempço abaixo, dia  
//começara sendo com o valor "segunda" e o último loop será "sexta".

let dia = ["segunda", "terça", "quarta", "quinta", "sexta"];
for(let dia of dias){
    console.log(dia);
}

/* caso você precise trabalhar com índices ou múltiplas posições da lista, talvez  
seja melhor usar o for normal. 
*/