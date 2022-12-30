var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var colores = ['blue', 'red', 'green'];
var contador = 0;

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);


function cambiarColorClickDerecho(){
    contador = (contador + 1) % colores.length;
    var newColor = colores(contador);    
}


function dibujarCirculoClickIzquierdo(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = colores[contador];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
    console.log(x + ", " + y);
    
}
pantalla.addEventListener('contextmenu', cambiarColorClickDerecho);
pantalla.addEventListener('click', dibujarCirculoClickIzquierdo);


