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
