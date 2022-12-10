var input = document.querySelector("input");

function mostrarTexto() {
  alert(input.value);
  input.value = "";
}


var button = document.querySelector("button");
button.onclick = mostrarTexto;
