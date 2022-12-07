function saltarlinea(){
    document.write("<br><br>");    
}

// Funcion de imprimir
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}


// Juego de adivinar
function sorteo(n){
    return Math.round(Math.random()*n);
}

var num_Pensado = sorteo(10);
var num_Ingrasado = parseInt(prompt("Ingresa un numero entre 0-10"));

if (num_Pensado == num_Ingrasado){
    imprimir("Usted Acerto !!!");
}     
else {
    if(num_Ingrasado > num_Pensado){
        imprimir("Usted no acerto, la respuesta menor a tu numero: " + num_Pensado + " :(");
    }
    else{
        imprimir("Usted no acerto, la respuesta era mayor a tu numero")
    }
}




// Juego de adivinar
/*
var num_Pensado = Math.round(Math.random() * 10);
var num_Ingrasado = parseInt(prompt("Ingrasa un numero entre 0-10"));

if (num_Pensado == num_Ingrasado){

    imprimir("Usted acerto !!!")

} else {

    imprimir("Usted no acerto, la respuesta era: " + num_Pensado + " :(");

}
*/