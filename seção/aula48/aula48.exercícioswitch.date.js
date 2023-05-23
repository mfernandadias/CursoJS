/*const h1 = document.querySelector('.container h1');
const data = new Date();

//h1.innerHTML = data.toString();

function getDiaSemanaTexto () {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: 
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: 
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3: 
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: 
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5: 
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6: 
            diaSemanaTexto = 'Sabádo';
            return diaSemanaTexto;
        default: 
            diaSemanaTexto = '';
            return diaSemanaTexto;
        }     
}
function getNomeMes () {
    let nomeMes;
    
    switch (numeroMes) {
        case 0: 
            nomeMes = 'Janeiro';
            return nomeMes;
    }
    switch (numeroMes) {
        case 1: 
            nomeMes = 'Feveriro';
            return nomeMes;
    }
    switch (numeroMes) {
        case 2: 
            nomeMes = 'Março';
            return nomeMes;
    }
    switch (numeroMes) {
        case 3: 
            nomeMes = 'Abril';
            return nomeMes;
    }
    switch (numeroMes) {
        case 4: 
            nomeMes = 'Maio';
            return nomeMes;
    }
    switch (numeroMes) {
        case 5: 
            nomeMes = 'Junho';
            return nomeMes;
    }
    switch (numeroMes) {
        case 6: 
            nomeMes = 'Julho';
            return nomeMes;
    }
    switch (numeroMes) {
        case 7: 
            nomeMes = 'Agosto';
            return nomeMes;
    }
    switch (numeroMes) {
        case 8: 
            nomeMes = 'Setembro';
            return nomeMes;
    }
    switch (numeroMes) {
        case 9: 
            nomeMes = 'Outubro';
            return nomeMes;
    }
    switch (numeroMes) {
        case 10: 
            nomeMes = 'Novembro';
            return nomeMes;
    }
    switch (numeroMes) {
        case 11: 
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}
function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
        `de ${data.getFullYear()}` +
        `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data); */

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });