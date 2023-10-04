//JSON - JavaScript Object Notation 
//chave e valor com o bjetivo de transferir dados 

let name = "Felipe"
let age = 28
let products = ["mouse 2xwm", "teclado mecânico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generate(name, products, productsValues, age)

function generateInvoice(name){
    console.log("O comprador é " + name)
    console.log("-------------------")
    console.log("O comprador é " + products[0])
    console.log("O valor é " + productsValues[0])
}