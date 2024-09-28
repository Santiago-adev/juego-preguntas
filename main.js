let tiempoterminado
let intervaloTiempo

function InicioTiempo(){
    tiempoterminado = setTimeout(tiempoCumplido, 30000)
    intervaloTiempo = setInterval(tictac, 1000)

    document.getElementById('CuentaRegresiva').textContent = 30
}

function tictac(){
    let tiempo = parseInt(document.getElementById('CuentaRegresiva').textContent)

    if (tiempo > 0) {
        document.getElementById('CuentaRegresiva').textContent = tiempo - 1
    }
}


function tiempoCumplido(){
    clearInterval(intervaloTiempo)
    document.getElementById('CuentaRegresiva').textContent = 0
    document.getElementById('audioFinal').play()
    alert('Fin del juego')
}

function Finalizar(){
    clearTimeout(tiempoterminado)
    clearInterval(intervaloTiempo)

    let fechafinal = new Date()
    let respuesta1 = document.getElementById('Respuesta1').value
    let respuesta2 = document.getElementById('Respuesta2').value
    let respuesta3 = document.getElementById('Respuesta3').value
    let respuesta4 = document.getElementById('Respuesta4').value
    let respuesta5 = document.getElementById('Respuesta5').value

    let mensaje = fechafinal.toLocaleDateString('es-Es') + '\n' + 
    'Respuesta 1: ' + respuesta1 + '\n' + 
    'Respuesta 2: ' + respuesta2 + '\n' +
    'Respuesta 3: ' + respuesta3 + '\n' +
    'Respuesta 4: ' + respuesta4 + '\n' +
    'Respuesta 5: ' + respuesta5

    alert(mensaje)
}

function Reseteo() {
    location.reload()
}