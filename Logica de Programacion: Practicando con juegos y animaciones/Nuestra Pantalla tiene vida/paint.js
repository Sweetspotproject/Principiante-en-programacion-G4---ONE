var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// Variables para crear la paleta
var xRojo = 0;
var xVerde = 50;
var xBlue = 100;
var yCuadrados = 0;
var tamanoCuadrado = 50;
var colorActual = "blue";

var puedoDibujar = false;

// Funcion que dibuja un circulo
function dibujarCirculo(x, y, colorActual) {
  if (puedoDibujar) {
    pincel.fillStyle = colorActual;
    pincel.beginPath();
    pincel.arc(x, y, 5, 0, 2 * Math.PI);
    pincel.fill();
  }
}

// Funcion que dibuja los cuadrados de la paleta
function dibujarCuadrados(x, y, tamano, color) {
  pincel.fillStyle = color;
  pincel.fillRect(x, y, tamano, tamano);
  pincel.fill();
}

// Funcion que crea la paleta de colores
function colorPalette() {
  dibujarCuadrados(xRojo, yCuadrados, tamanoCuadrado, "red");
  dibujarCuadrados(xVerde, yCuadrados, tamanoCuadrado, "green");
  dibujarCuadrados(xBlue, yCuadrados, tamanoCuadrado, "blue");
}

function habilitarDibujar() {
  puedoDibujar = true;
}

function deshabilitarDibujar() {
  puedoDibujar = false;
}

// Funcion que limita el area
function disenarHabilitado(xCoordenada, yCoordenada) {
  if (
    xCoordenada >= 0 &&
    xCoordenada < 3 * tamanoCuadrado + 5 &&
    yCoordenada >= 0 &&
    yCoordenada < tamanoCuadrado + 5
  ) {
    return false;
  } else {
    return true;
  }
}

function capturarMovimientoMouse(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;

  if (disenarHabilitado(x, y)) {
    dibujarCirculo(x, y, colorActual);
  }
}

function seleccionarColor(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;

  if (y > yCuadrados && y < yCuadrados + tamanoCuadrado) {
    if (x > xRojo && x < xRojo + tamanoCuadrado) {
      colorActual = "red";
      console.log(colorActual);
    } else if (x > xVerde && x < xVerde + tamanoCuadrado) {
      colorActual = "green";
    } else if (x > xAzul && x < xAzul + tamanoCuadrado) {
      colorActual = "blue";
    }
  }
}
pantalla.onmousemove = capturarMovimientoMouse;

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

colorPalette();

pantalla.onclick = seleccionarColor;