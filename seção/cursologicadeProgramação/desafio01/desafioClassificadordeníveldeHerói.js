/*Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui 
e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais 
seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de 
dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar 
suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize 
uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 
Bons estudos 
*/

let nome = "Homem Aranha"

let XP_values = [500]; //valor XP 

for (let i = 0; i < XP_values.length; i++) {
    let XP = XP_values[i];
    let titulo;

    if (XP < 1000) {
        titulo = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        titulo = "Bronze";
    } else if (XP >= 2001 && XP <= 5000) {
        titulo = "Prata";
    } else if (XP >= 6001 && XP <= 7000) {
        titulo = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        titulo = "Platina";
    } else if (XP >= 8001 && XP <= 9000) {
        titulo = "Ascendente";
    } else if (XP >= 9001 && XP <= 10000) {
        titulo = "Imortal";
    } else {
        titulo = "Radiante";
    }
   
    console.log(`O Herói ${nome}, esta no nível de ${titulo}`)
    
}

