// Funcion de saltar linea
function saltarlinea() {
  document.write("<br><br>");
}

// Funcion de imprimir
function imprimir(frase) {
  document.write(frase);
  saltarlinea();
}

for (var lineas = 1; lineas <= 3; lineas++) {
  for (var columnas = 1; columnas <= 10; columnas++) {
    document.write("*");
  }
  saltarlinea();
}

saltarlinea();
saltarlinea();
imprimir("Fin");
