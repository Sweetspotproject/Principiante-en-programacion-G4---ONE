/*
var secreto = Math.round(Math.random() * 10);
var input = document.querySelector("input");
input.focus();
function verificar() {
  if (parseInt(input.value) == secreto) {
    alert("Usted acerto");
  } else {
    alert("No acerto!!!");
  }
  input.value = "";
  input.focus();
}
var button = document.querySelector("button");
button.onclick = verificar;

var input = document.querySelector("input");

*/

// Validando duplicados

/*
function aleatorio() {
  return Math.round(Math.random() * 10);
}
function sortearNumeros(cantidad) {
  var secretos = [];
  var contador = 1;

  while (contador <= cantidad) {
    var numeroAleatorio = aleatorio();
    var encontrado = false;
    if (numeroAleatorio != 0) {
      for (var posicion = 0; posicion < secretos.length; posicion++) {
        if (numeroAleatorio == secretos[posicion]) {
          encontrado = true;
          break;
        }
      }
      if (encontrado == false) {
        secretos.push(numeroAleatorio);
        contador++;
      }
    }
  }
  return secretos;
}

var secretos = sortearNumeros(4);
console.log(secretos);
*/

/*
// Mi intento
// ¡No hay ingredientes repetidos aquí!

var ingredientes = [];
var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
var contador = 0;
var encontrado = false;

while (contador <= cantidad) {
  var ingrediente = prompt("Informe el ingrediente " + contador);
  ingredientes.push(ingrediente);
  if(cantidad == ingrediente[enlista]){
    for(var enlista = 0;ingrediente.length;enlista++)
    encontrado = true;
    break;
  }
  if (encontrado == false){
    ingredientes.push(ingrediente)
    contador++;
  }

}

console.log(ingredientes);
*/

// Intento de instructor
var ingredientes = [];
var cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
var contador = 1;

while (contador <= cantidad) {
  var ingrediente = prompt("Informe el ingrediente " + contador);
  var existe = false;
  for (var posicion = 0; posicion < ingredientes.length; posicion++) {
    if (ingredientes[posicion] == ingrediente) {
      existe = true;
      alert("repetido " + ingrediente);
      break;
    }
  }
  if (existe == false) {
    ingredientes.push(ingrediente);
    contador++;
  }
}
console.log(ingredientes);
