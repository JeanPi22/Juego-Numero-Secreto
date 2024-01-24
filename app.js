// Asignarle texto a los selectores del HTML

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Número Secreto';

let parrafo = document.querySelector('.texto__parrafo');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

//-----------------------------------------------------------------

let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//document.getElementById('valor del Id en HTML').value --> Con esto llamamos un elemento con id.

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        //Llamamos función de limpiar caja
        limpiarCaja()
    }
}

function reiniciarJuego() {
    //Limpiar caja de número
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos    
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Validar si se sortearon todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortaron todos los números posibles');
    } else {
        //Valida si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Función para asignar elementos a los distintos selectores del HTML

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Utilizar función para asignar valores a los elementos
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto!!!');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();