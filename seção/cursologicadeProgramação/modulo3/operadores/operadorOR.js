// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guardaChuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair )
