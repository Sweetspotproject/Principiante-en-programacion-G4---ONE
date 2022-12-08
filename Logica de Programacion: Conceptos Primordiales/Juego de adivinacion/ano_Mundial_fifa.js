function saltarlinea() {
    document.write("<br><br>");
  }
  
  // Funcion de imprimir
  function imprimir(frase) {
    document.write(frase);
    saltarlinea();
  }
  

var aMundial = 1920;
var limite = parseInt(prompt("Ingrese el ano limite para calcular"));

while (aMundial <= limite){
    imprimir("Hubo mundial de FIFA en el ano " + aMundial);
    aMundial = aMundial + 4;    
}
imprimir("Fin")