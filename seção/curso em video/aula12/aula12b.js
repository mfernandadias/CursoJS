
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite!')
}

/* switch (expressão) {
    case valor 1:

        break
    case valor 2:

        break
    case valor 3:

        break
    case valor 4:
        
        break
}
*/