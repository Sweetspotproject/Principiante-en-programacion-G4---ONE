var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio) {
  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpiarPantalla() {
  pincel.clearRect(0, 0, 600, 400);
}

var x = 0;
var direccion = 1;
function actualizarPantalla() {
  limpiarPantalla();
  if (x > 600) {
    direccion = -1;
  } else if (x < 0) {
    direccion = 1;
  }
  dibujarCirculo(x, 20, 20);
  x = x + direccion;
}

setInterval(actualizarPantalla, 10);
//dibujarCirculo(20,20,10);
