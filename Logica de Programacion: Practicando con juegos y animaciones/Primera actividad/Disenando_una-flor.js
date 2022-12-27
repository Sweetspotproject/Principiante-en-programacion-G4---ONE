var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
}
/*
for(x = 0; x = 600; x = x + 600){
    dibujarCirculo(x, 0, "yellow");
    dibujarCirculo(x, 200, "black");
}*/

function dibujarFlor(x,y){

dibujarCirculo(x,y+20,10, "yellow");
dibujarCirculo(x,y,10, "black");
dibujarCirculo(x,y-20,10, "blue");
dibujarCirculo(x-20,y,10, "pink");
dibujarCirculo(x+20,y,10, "red");

}

dibujarFlor(300,200);
dibujarFlor(400,300);
dibujarFlor(200,300);