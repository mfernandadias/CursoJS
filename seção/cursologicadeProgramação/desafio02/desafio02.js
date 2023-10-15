/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

function calcular(vitorias, derrotas) {
    let resultado = vitorias - derrotas; 
    //console.log(resultado);
    return resultado;
}
let vitorias = 100;
let derrotas =  10; 
let resultado = calcular(vitorias, derrotas);

if (resultado <= 10) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Ferro`)
} else if (resultado >= 11 && resultado <= 20) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Bronze`)
} else if (resultado >= 21 && resultado <= 50) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Prata`)
} else if (resultado >= 51 && resultado <= 80) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Ouro`)
} else if (resultado >= 81 && resultado <= 90) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Diamante`)
} else if (resultado >= 91 && resultado <= 100) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Lendário`)
} else if (resultado >= 101) {
    console.log(`O Herói tem de saldo de ${resultado} e está no nível de Imortal`)
} else {
    console.log("Valor de resultado inválido.");
}

