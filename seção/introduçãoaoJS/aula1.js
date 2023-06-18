var variavel = 'olá pessoa';
let outravariavél = "neste curso aprendemos sobre s fundamentos de JavaScript";
const umaConstante = "veja um resumo do que você vai aprender";
let numero = 120;
let texto = "String";
let booleano = true || false; 
let vetor = [1, 2, 3, 4, 5, 6, 7, 8];
let objeto = { 
    propeirdade: 12, 
    propriedade: "teste"
};

let umaFuncao = function () {
    //fazer algo 
};

function outraFuncao() {
    umaFuncao();
    umaFuncao();
};

if (booleano) {
    console.log(variavel);
} else {
    alert(outraVariavel);
}

switch (numero) {
    case 1: 
         console.log(1);
         break;
    case 112: 
         console.log(numero * numero);
         break;
    case 120:
        outraFuncao();
}

for (let index = 0; index < vetor.length; index++) {
    vetor[index] = vetor[index] + 5;
}

for (const palavra of ["olá", "Mundo", "!"]) {
    console.log(palavra);
}

while(1 == 1) {
    numero = numero + 5;

    if(numero > 1000) {
        break;
    }
}

do { 
    numero = numero + 5;
    if (numero > 1000) {
        break;
    }
} while (1 == 1);