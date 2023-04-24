//objetos(básico)

/*const array = [1, 2, 3];
array.push(4);
array[0]= 'Luiz';

const nome01 = 'Luzi';
const sobrenome01 = 'Miranda';
const idade01 = 25; 

const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade02 = 55; */ 

//pessoa objeto
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pesssoa1.sobrenome); */

/*function criaPessoa (nome, sobrenome, idade) {
    return {
     nome, sobrenome, idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Moreira', 55 );
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome)*/

const pesssoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda', 
    idade: 25,

    fala(){
       console.log(`A minha idade atual é ${this.idade}.`);
    }, 
    incrementaIdade() {
        ++this.idade;
    }
};

pesssoa1.fala();
pesssoa1.incrementaIdade();
pesssoa1.fala();
pesssoa1.incrementaIdade();
pesssoa1.fala();
pesssoa1.incrementaIdade();
pesssoa1.fala();

//${this.nome} ${this.sobrenome} está falando oi ...`


