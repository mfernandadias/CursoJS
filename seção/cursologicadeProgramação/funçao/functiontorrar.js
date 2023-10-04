/*torrar("pão de forma")
torrar("pão integral")
//var nome = "Felipe"

function torrar(pao, nome) {
    let nome = "felipe"
    console.log("Torrada feita com " + pao)
    console.log(nome)
}*/

torrar ("pão na chapa")

function torrar(pao, nome = "Cliente", valor=99.90) {
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
}