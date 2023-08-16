let celciusInput = document.querySelector('#celcius >input')
let FahrenheitInput = document.querySelector('#Fahrenheit >input')

let btn = document.querySelector('.button button')

function roundnumber(number){
    return Math.round(number*100)/100
}


celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32

    FahrenheitInput.value = roundnumber(fTemp)
})

FahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32 ) * (5/9)

    celciusInput.value = roundnumber(cTemp)
})

btn.addEventListener('click',()=>{
    celciusInput.value = " "
    FahrenheitInput.value = " "
})

