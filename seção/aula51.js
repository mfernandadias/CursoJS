//atribuição via desestruturação (objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil', 
        numero: 320

    }
};

//atribuição via desestruturação 
const { 
    endereco: {rua, numero}, 
    enredeco
} = pessoa; 
console.log(rua, numero, );