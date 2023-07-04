//função fábrica (factory functions)
//constructor function (função construtora)
//vatagens: 
//

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },
        //setter 
        set nomecompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala (assunto = 'falando sobre NADA'){
            return `${this.nome} está ${assunto}.`;
        }, 
        altura: a, 
        peso: p,
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomecompleto = 'Maria Fernanda dos Santos Dias';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

/*const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.fala('falando sobre JS'));*/