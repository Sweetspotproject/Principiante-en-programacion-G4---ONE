// Funcion de saltar linea
function saltarlinea(){
    document.write("<br><br>");    
}

// Funcion de imprimir
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}

// Programa calcular puntos de un equipo futbol

var victorias = parseInt(prompt("Informe la cantidad de victorias"));
var empates = parseInt(prompt("Informe la cantidad de empates"));

puntosTotales = (victorias * 3) + empates;
imprimir("El total de puntos del equipo es: " + puntosTotales)


 if (puntosTotales > 28) {
    imprimir("El equipo mejoro");
 }


 if (puntosTotales < 28) {
    imprimir("El equipo empeoro");
 }


 if (puntosTotales == 28) {
    imprimir("El equipo esta igual que antes");
 }


 // Actvidad de refuerzo
 /*
 var num = 10;

// Correcto
 if (num >= 2 && num < 12) {
    alert("Entro")
 }


// Incorrecto 
 if (num >= 2 && < 12) {
    alert("Entro")
 }


// Correcto
 if (num >= 10) {
    alert("Entro")
 }*/