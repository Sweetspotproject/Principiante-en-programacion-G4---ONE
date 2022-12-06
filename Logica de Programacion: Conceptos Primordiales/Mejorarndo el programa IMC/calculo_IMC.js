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


nombre = prompt("Cual es su nombre?");
peso = prompt(nombre + ", cual es su peso?");
altura = prompt(nombre + ", cual es su altura?");

imcCalculado = calcularimc(peso,altura);

imprimir(nombre + " su imc calculado es: " + imcCalculado);


if (imcCalculado < 18.5){
    imprimir("IMC bajo de lo recomendado");
}


if (imcCalculado >= 18.5){
    if (imcCalculado < 25) {
        imprimir("IMC dentro de lo recomendado");
    }
}


if (imcCalculado >= 25){
    if (imcCalculado < 30) {
    imprimir("IMC se concidera obecidad");
    }
}


if (imcCalculado >= 30){
    imprimir("IMC conciderado obecidad");
}