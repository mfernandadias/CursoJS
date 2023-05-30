//tratando e lançando erros (try, catch, finally)
/*try { 
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    }   catch(e) {
        console.log('Deu erro');
    }   console.log('Também sou finally.');

}   catch(e) {
    console.log('Tratabdo o erro');
}   finally {
    console.log('Finally: Eu sempre sou executado');
} */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
 }

 if (!data) {
    data = new Date();
 }

 return data.toLocaleTimeString('pr-BR', {
    hour: '2-digit',
    minute: '2-digit', 
    second: '2-digit',
    hour12: false
 });
}

try{
    const data = new Date('01-01-1970 11:45:00')
    const hora = retornaHora();
    console.log(hora);
}   catch(e) {
    //tratar erro 
    //console.log(e);
}   finally {
    console.log('Tenha um bom dia.');
}