function saltarlinea() {
    document.write("<br><br>");
  }
  
  // Funcion de imprimir
  function imprimir(frase) {
    document.write(frase);
    saltarlinea();
  }


  var multiplicador = 1;

  while(multiplicador <= 50){
      imprimir(2 * multiplicador);
      multiplicador++;    
  }

  imprimir("Fin");