

let numeroSecreto;
let intentos = 0;
let listaNumerosSorteados = []; // este declaracion de lista con corchetes es un array.
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } 
    // el ususario no acerto.
    else if (numeroDeUsuario > numeroSecreto)  {
         asignarTextoElemento('p','El numero secreto es menor');
    } else {
            asignarTextoElemento('p','El numero secreto es mayor');
    }

    intentos++;
    limpiarCaja();

    return;
}

function limpiarCaja() {
let valorCaja = document.querySelector('#valorUsuario'); //aqui llamamos el input por su id pero con la funcion selector.
valorCaja.value = ''; // puede hacer lo mismo en la linea anterior asi: let valorCaja = document.querySelector('#valorUsuario').value=''; 

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(listaNumerosSorteados);
        console.log(numeroGenerado);
        // si ya sorteamos todos los numeros.
    if (listaNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
    } else {

    //si el numero generado esta en la lista
         if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();

         } else {
        listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;

    }
}
}

function condicionesIniciales() {  
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log(numeroSecreto);

}

function reiniciarJuego() {
// limpiar caja
    limpiarCaja();
// indicar mensaje de intervalo de numeros
// generar el numero aleatorio
// Inicializar el numero de intentos
    condicionesIniciales();

// deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
