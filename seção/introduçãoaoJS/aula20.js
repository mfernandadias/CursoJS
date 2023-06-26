let booleano = false; 
let Ola = "olá Mundo"; 
let tchau = "tchau Mundo"; 
let numero = 55; 

if (numero == 66) {
    booleano = !booleano;
}

if (booleano)  {
    console.log(Ola);
} else {
    alert(tchau);
}

if (numero === "55") {
    console.log(Ola);
} else if (booleano !== "false") {
    console.log(Ola);
} else {
    console("não encontrado");
}

switch (numero) {
    case 1:
        console.log(1);
        break;
    case 12: 
        console.log(numero * numero);
        break; 
    case 120: 
        outraFuncao();
        break; 
    default: 
       umaFuncao();
}