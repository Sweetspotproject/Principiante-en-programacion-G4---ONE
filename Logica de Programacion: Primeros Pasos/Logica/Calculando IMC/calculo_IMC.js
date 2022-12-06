function saltarlinea(){
    document.write("<br><br>");    
}

// Funcion de imprimir
function imprimir(frase){
    document.write(frase);
    saltarlinea();
}

function calcularimc(peso,altura){
    return peso / (altura * altura);
}


nombre = prompt("Cual es su nombre?")
pesoInformado = prompt(nombre + ", cual es su peso?")
alturaInformado = prompt(nombre + ", cual es su altura?")

imcCalculado = calcularimc(pesoInformado,alturaInformado)

imprimir(nombre + " su imc calculado es: " + imcCalculado);