let vetorNumero = [1, 2, 55, 67, 8, 5, 42, 5];
let valor = 5; 
const valorLimite = 100; 

for (let index = 0; index < vetorNumero.length; index++) {
    if (vetorNumero[index] > 20) {
        console.log("maior");
    }
}

for (const item of vetorNumero) {
    if (item > 20) {
        console.log("maior");
    }
}

while(valor > valorLimite) {
    console.log(valor);
    valor = valor * 2;
}

do{
    console.log(valor);
    valor = valor * 2; 
} while(valor > valorLimite);