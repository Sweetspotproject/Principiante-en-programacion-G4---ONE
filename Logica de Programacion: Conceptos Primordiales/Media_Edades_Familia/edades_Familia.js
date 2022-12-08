function saltarlinea() {
  document.write("<br><br>");
}

// Funcion de imprimir
function imprimir(frase) {
  document.write(frase);
  saltarlinea();
}

var numMienbros = parseInt(prompt("Ingrese la cantidad de miembros de su familia")
)
var contador = 1;
var totalEdades = 0;


while (contador <= numMienbros) {
  edad = parseInt(prompt("Ingrese la edad del familiar"));
  totalEdades = totalEdades + edad;
  contador++;
}

mediaEdades = totalEdades / numMienbros;
imprimir("La media de las edades de la familia es " + mediaEdades);