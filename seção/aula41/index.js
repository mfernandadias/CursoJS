//if, else is e els (2)

// se(numero >= && numero <= 5) ocorrer, faça isso {código}
// se não faça isso {o códig}
//

const numero = 10; 

if(numero <= 10)  { //verdadeira
    console.log('O número é menor ou igual a 10');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
}  else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
}  else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número não está entre 0 e 11');
} 

console.log('aqui vai o resto do código');
