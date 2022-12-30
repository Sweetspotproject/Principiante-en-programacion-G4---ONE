var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);
var colores = ['blue', 'red', 'green'];
var colorActual = 0;


function dibujarCirculoClickIzquierdo(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = colores[colorActual];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
    console.log(x + ", " + y);
    
}


function cambiarColorClickDerecho(){
    colorActual = (colorActual + 1) % colores.length;
    var newColor = colores(contador);    
}

pantalla.addEventListener('contextmenu', cambiarColorClickDerecho);
pantalla.addEventListener('click', dibujarCirculoClickIzquierdo);


