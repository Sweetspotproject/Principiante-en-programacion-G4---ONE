function saltarLinea(){
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<hr>")
    document.write("<br>")
    document.write("<br>")
}

function imprimir(frase){
    document.write("<big>" + frase + "</big>");
    saltarLinea();
}

var ano = 2025;

imprimir("Hola amigos");


// Este codigo calcula las edades de JUan, Pedro y Carlos

imprimir("Juan tiene: " + (ano-2000) + " anos");
imprimir("Pedro tiene: " + (ano-1995) + " anos");

ano = 2030

imprimir("Carlos tiene: " + (ano-2005) + " anos");