function saltarlinea() {
    document.write("<br><br>");
  }
  
  // Funcion de imprimir
  function imprimir(frase) {
    document.write(frase);
    saltarlinea();
  }
  

var multiplicador = 1;

while(multiplicador <= 10){
    imprimir(5 * multiplicador);
    multiplicador++;    
}