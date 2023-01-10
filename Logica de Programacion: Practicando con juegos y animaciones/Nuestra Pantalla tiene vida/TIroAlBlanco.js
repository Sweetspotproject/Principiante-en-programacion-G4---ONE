var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);
var radio = 10;
var xRandom;
var yRandom;

function dibujarCirculo(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

var x = 0;

function crearObjetivo(x, y) {
  dibujarCirculo(x, y, radio + 20, "red");
  dibujarCirculo(x, y, radio + 10, "white");
  dibujarCirculo(x, y, radio, "red");
}

function posicionRandom(maximo) {
  return Math.floor(Math.random() * maximo);
}

function actualizarPantalla() {
  limpiarPantalla();
  xRandom = posicionRandom(600);
  yRandom = posicionRandom(400);
  crearObjetivo(xRandom, yRandom);
  x++;
}

setInterval(actualizarPantalla, 700);

function disparo(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;
  if (
    x < xRandom + radio &&
    x > xRandom - radio &&
    y < yRandom + radio &&
    y > yRandom - radio
  ) {
    alert("Buen Tiro !!!");
  }
}

pantalla.onclick = disparo;
//dibujarCirculo(20,20,10);
