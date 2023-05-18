// condicao) ? 'Valor para verdadeira' 'Valor para falso' ;

const pontuacaoUSuario = 1000;
const nivelUSuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP': 'Usuário normal';  

const corUsuario = null; 
const corPadrao = corUsuario || 'Preta';

console.log(nivelUSuario, corPadrao);

/*if (pontuacaoUSuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */