//objeto:: é um tipo de dado composto pelos outros tipos. Com ele, podemos 
//organizar informações relacionadas em uma variável. 
let carro = {
    rodas: 4, 
    portas: 2, 
    nome: "um carro", 
    aVenda: true
}

//criação: um objeto vazio é bem simples de criar; 
let carro1 = {};

//no caso de um objeto com propriedades (variáveis), fazemos assim: 
let carro3 = { 
    rodas: 4,
    nome: "Carro"
};

//caso você já tenha criado o bjeto e queira adiconar um novo, você pode 
//fazer de duas formas: 

carro.portas = 2; 
carro["portas"] = 2;

//note que se você usar a segunda opção, precisa ter uma String dentro dos [];

//a alteração de dados funciona da mesma forma 

carro.rodas = 5;
carro.portas = 4; 
carro.nome = "carrão";

carro["rodas"] = 3; 
carro["Portas"] = 2;
carro["nome"] = "carrinho";