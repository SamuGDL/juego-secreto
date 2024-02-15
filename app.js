/*let parrafo = document.querySelector ('p');
parrafo.innerHTML = "Indica un número del 1 al 10"; */

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log (numeroDeUsuario);
    //console.log (typeof(numeroDeUsuario));
    //console.log (numeroSecreto);
    //console.log (typeof(numeroSecreto));
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el número secreto en ${intentos} ${(intentos===1) ? 'vez' : 'veces'} `);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento  ('p', "El número secreto es menor");
        } else{
            asignarTextoElemento ('p', "El número secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya han sido asignados todos los numeros posibles')
    } else{
        //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
         } else{
            listaNumerosSorteados.push(numeroGenerado); 
            return numeroGenerado;
        }
    
    }
}


function condicionesIniciales() {
    //generar numero aleatorio
    //indicar mensaje de intervalo de numeros
    //reiniciar el contador de intentos
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} papuh`)
    asignarTextoElemento('h1','Juego del número Secreto')
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
    console.log (numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true); 
}
condicionesIniciales();




/* TAREA
function helloWorld() {
    console.log("Hola mundo")
}
helloWorld();

function hola(nombre) {
    console.log(`Hola, ${nombre}`);    
}
hola("Samu");

function calcularDoble(numero) {
    return numero * 2;
  }
  
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

function promedio(n1, n2, n3) {
    return ((n1+n2+n3)/3);
}
let prom = promedio (8, 9,7);
console.log (prom)

function mayor(a, b) {
    if (a>b){
        return a;
    } else{
        return b;
    }
}
let nume = mayor (1111,300)
console.log (nume);
*/
