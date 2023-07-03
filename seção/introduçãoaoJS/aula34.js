/*
complete a função abaixo de forma que ela receba uma variável como parametro 
e retorne um vetor no final 
essa variável passada por parametro terá as seguintes propriedades: 
1) ela tambpem será um vetor 
2) cada um de seus calores serão vetores com números 
*/
function processarVariavel(variavel) {
    var novoVetor = [];
  
    for (var i = 0; i < variavel.length; i++) {
      var soma = 0;
      for (var j = 0; j < variavel[i].length; j++) {
        soma += variavel[i][j];
      }
      novoVetor.push(soma);
    }
  
    return novoVetor;
  }
  
  // Exemplos de uso:
  console.log(processarVariavel([[1, 1], [1, 1, 1], [0, 0, 0, 1]])); // [2, 3, 1]
  console.log(processarVariavel([[1, 1, 1], [2, 2, 2], [3, 3, 3]])); // [3, 6, 9]
  console.log(processarVariavel([[0, 0, 1], [2, 0, 0], [0, 3, 0]])); // [1, 2, 3]