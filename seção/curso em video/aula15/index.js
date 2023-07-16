/*let num = [5, 6, 2, 9, 3]


num[5] = 7
//num.push(7)

console.log(num)
num.length
num.sort() */

/*let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
} */

let valores = [8, 1, 7, 4, 2, 9]
 
/* for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores}`)
}
*/

 /* for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
 } */

 let num = [5, 8, 2, 9, 3] 
 num.push(1)
 num.sort()
 console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro valor do vetor é ${num[0]} `)
 let pos = num.indexOf(4)

 if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
 } else {
    console.log(`O valor está na posição ${pos}`)
 }