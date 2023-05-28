//for of - estrutura de repetição 
//            0123...
const nomes = ['Luiz Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
   console.log(nomes[i]);
}

console.log('####');

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

/* 
for clássico - geralemente com iteráveis (array ou strings)
for in - retorna o índice ou chave (string, array ou objetos)
for in - retorna o valor em si (iteráveis, arrays ou strings)
*/ 