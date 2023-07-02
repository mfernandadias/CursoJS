//LOOPS 
/* for: o "for" é um comando que executa X vezes uma ação seguindo a forma como  
foi definido para ele fazê-la  
*/

for(let i = 0; i < 10; i++) {
    console.log(i);
}

/* instrução: a instrução  de execução do for é divida em 3 partes separadas por  
ponto e vírgula
1ª) instrução ocorrerá quando o for iniciar. Normalmente é a criação de uma variável 
de controle 
*/


/* 2ª) a condição para encerrar o for. Neste caso, ele executará enquanto i for  
menor que 10. 
*/

/*importante: caso essa condição nunca se torne "false", teremos um loop infinito.
*/

/*3ª) instrução que ocorrerá no final de cada repetição. Normalmente é um 
incremento de 1 da variável.
*/

//utilidade: além de executae uma mesma instrução várias vezes. Ele é perfeito  
//para ler vetores... 
let lista = ["cachorro", "gato", "galinha"];
for(let i = 0; i <lista.length; i++){
    console.log(lista[i]);
}

//utilidade: ... ou modificar todos os itens de um vetor 
let valores = [1, 2, 3, 4, 5];
for(let i = 0; i < valores.length; i++){
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}

/* observação: note que os passos padrões são opcionais. Mas caso você queira  
executar de outra forma, existem loops melhores para isso. 
*/

/*  
*/