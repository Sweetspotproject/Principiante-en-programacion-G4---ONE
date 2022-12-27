function dibujarcuadrado(x,y,color) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = color;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = "lightgray";
  pincel.strokeRect(x, y, 50, 50);
  
}
/*
var x = 0;

while(x < 600){
  dibujarcuadrado(x,0,"red")
  dibujarcuadrado(x,50,"yellow")
  dibujarcuadrado(x,100,"green")
  x = x + 50; 
}
*/



for(var x = 0; x < 600; x = x + 50){
  dibujarcuadrado(x,0,"red")
  dibujarcuadrado(x,50,"yellow")
  dibujarcuadrado(x,100,"green")
}






























/*dibujarcuadrado(0, 0, "green");
dibujarcuadrado(0, 50, "yellow");
dibujarcuadrado(0, 100, "red");

pincel.fillStyle = "green";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "red";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,50,0,2*3.14);
pincel.fill();*/
