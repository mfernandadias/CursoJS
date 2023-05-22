//função date
/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); //01/01/1970
console.log(data.toString()); */
//os meses começam no zero 
//janeiro = 0; 
//fevereiro = 1;

//const data = new Date(2019, 03, 20, 15, 14, 58, 500); //ano, mes, dia, hora, minuto, segundo, milesimodesegundo

/*const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do zero 
console.log('Ano', data.getFullYear());
console.log('Houra', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('mil', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado

console.log(data.toString()); */
function zeroAEsqerda (num) {
    return num >= 10  ? num : `0${num}`;
}

function formataData(data) {
    //console.log(data);
    const dia = zeroAEsqerda(data.getData());
    const mes = zeroAEsqerda(data.getMonth() + 1);
    const ano = zeroAEsqerda(data.getFullYear());
    const hora = zeroAEsqerda(data.getHours());
    const min = zeroAEsqerda(data.getMinutes());
    const seg = zeroAEsqerda(data.getseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);