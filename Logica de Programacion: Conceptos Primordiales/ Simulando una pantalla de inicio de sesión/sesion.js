var inicioDeSesionRegistrado = "alura";
var passwordRegistrada = "alura321";

var inicioDeSesionIngresado = prompt("Ingrese su usuario");
var passwordIngresada = prompt("Ingrese su contraseña");
var instentos = 3;

while(){
    if (
    inicioDeSesionRegistrado == inicioDeSesionIngresado &&
    passwordRegistrada == passwordIngresada
) {
    alert("Bienvenido al sistema " + inicioDeSesionIngresado);
} else {
    alert("inicio de sesión inválido. Favor intente de nuevo");
}
}
