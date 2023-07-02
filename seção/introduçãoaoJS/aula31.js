/* BREAK: o break é um comando que podemos utilizar quando queremos 
parar/encerrar o loop na hora
*/

let num = 1; 
while(num < 10){
    console.log(num);
    if(num == 6){
        break;
    }
    num++;
}

for(let numero of [1, 2, 3, 4, 5, 6, 7]){
    console.log(numero);
    if(numero == 5){
        break;
    }
}

/* 
continue: com este comando, é possivel iniciar a próxima repetição do loop
*/
for(let numero of [1, 2, 3, 4, 5, 6, 7]){
    if(numero == 5 || numero == 7){
        continue;
    }
    console.log(numero);
}





