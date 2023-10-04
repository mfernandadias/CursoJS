/*torrar("pão de forma")
torrar("pão integral")
//var nome = "Felipe"

function torrar(pao, nome) {
    let nome = "felipe"
    console.log("Torrada feita com " + pao)
    console.log(nome)
}*/
/*torrar("pão na chapa", undefined, "felipe")
//torrar ("pão na chapa")
//não é uma b
function torrar(pao, nome = "Cliente", valor=99.90) {
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
} */

function createStringConnection(databasename) {
    console.log("connect:DBCONNECT; user=felipe; pass=1234; initial_d atabase= " + databasename)
}

createStringConnection("db_products")