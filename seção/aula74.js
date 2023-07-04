//funções imediatas (IIFEE)

//IIFE --> immediately invoked function expression 

/*function qualquerCoisa() {
    console.log(11123455);
}
qualquerCoisa();*/

(function () {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
}) ();

const nome = 'Qualquer coisa';