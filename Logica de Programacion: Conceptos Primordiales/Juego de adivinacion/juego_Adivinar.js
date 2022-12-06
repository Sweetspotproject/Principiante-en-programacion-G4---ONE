function saltarlinea(){
    document.write("<br><br>");    
}

// Funcion de imprimir
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}

// Juego de adivinar
var num_Pensado = Math.round(Math.random() * 10);
var num_Ingrasado = parseInt(prompt("Ingrasa un numero entre 0-10"));

if (num_Pensado == num_Ingrasado){

    imprimir("Usted acerto !!!")

} else {

    imprimir("Usted no acerto, la respuesta era: " + num_Pensado + " :(");

}

