let segundos = 0
let minutos = 0
let horas = 0
let interval

let cronometro = document.getElementById('cronometro')
let title = document.getElementById('title')

function start() {
    interval = setInterval(contador, 1000)
}

function pause() {
    clearInterval(interval)
}

function restart() {
    clearInterval(interval)
    horas = 0
    minutos = 0
    segundos = 0
    cronometro.innerText = '00:00:00'
    title.innerText = '00:00:00'
}

function contador() {
    segundos++
 
    if(segundos % 60 == 0) {
        minutos++
        segundos = 0

        if(minutos % 60 == 0) {
            horas++
            minutos = 0
        }
    }

    cronometro.innerText = twodigits(horas) + ':' + twodigits(minutos) + ':' + twodigits(segundos)
    title.innerText = twodigits(horas) + ':' + twodigits(minutos) + ':' + twodigits(segundos)
}

function twodigits(digit){
    if(digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}
