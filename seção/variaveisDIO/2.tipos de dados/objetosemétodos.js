const pessoa = {
    nome: "renan",
    idade: 30, 
    falar: function() {
        console.log(`Meu nome é ${this.nome}`)
    }
    
}

//x.sobrenome = 'Johannsen de Paula'
//x['nome'] = 'Jose'
pessoa.falar()

//console.log(pessoa.nome)
//console.log(x['nome'])

//console.log(typeof x)

/* x.falar = function() {
    console.log('teste')
}
x.falar() */

const y = pessoa.falar
pessoa.falar()
y()