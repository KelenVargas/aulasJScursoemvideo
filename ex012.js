var horaAtual = new Date()
var hora = horaAtual.getHours()


console.log(`Agora são exatamente ${hora}h`)

if(hora < 12 ){
    console.log(`Bom dia!!`)
} else if (hora <19){
    console.log(`Boa Tarde!!`)
} else{
    console.log(`Boa Noite!`)
}