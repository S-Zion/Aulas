/*const pais = `USA`
console.log(`Onde você nasceu?`)
if (pais == `BR`){console.log(`Você é brasileiro.`)}
else{console.log(`Você é estrangeiro.`)}*/

const idade = 90
if (idade < 16){
    console.log(`Sua idade é ${idade} anos.`)
    console.log('Não vota.')
}

else if((idade === 16||idade === 17)||idade>=67){
    console.log(`Sua idade é ${idade} anos.`)
    console.log(`Voto opcional.`)
}

else{console.log(`Você tem ${idade} anos.`)
     console.log(`Voto obrigatório.`)
    }