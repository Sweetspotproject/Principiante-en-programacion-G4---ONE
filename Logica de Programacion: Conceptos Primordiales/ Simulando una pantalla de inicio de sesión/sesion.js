var inicioDeSesionRegistrado = "alura";
var passwordRegistrada = "alura321";

var instentosMax = 3;
var intentoActual = 1;

while (intentoActual <= instentosMax) {
  var inicioDeSesionIngresado = prompt("Ingrese su usuario");
  var passwordIngresada = prompt("Ingrese su contraseña");

  if (
    inicioDeSesionRegistrado == inicioDeSesionIngresado &&
    passwordRegistrada == passwordIngresada
  ) {
    alert("Bienvenido al sistema " + inicioDeSesionIngresado);
    intentoActual = instentosMax;
  } else {
    if (intentoActual == 3) {
      alert("Agotaste el numero de intentos permitidos");
    } else {
      alert("inicio de sesion invalido, por favor intente de nuevo");
    }
  }
  intentoActual++;
}

/*
var num_Pensado = Math.round(Math.random() * 10);
var intentos = 3;
var contador = 1;

while (contador <= intentos) {
  var num_Ingresado = parseInt(prompt("Ingresa un numero del 0-10"));

  if (num_Pensado == num_Ingresado) {
    alert(
      "Usted acerto !!! - Intento " +
        contador +
        " - El numero pensado era " +
        num_Pensado
    );
    break;
  } else {
    alert("Usted no acerto, la respuesta era: " + num_Pensado + " :(");
  }
  contador++;
}
*/
