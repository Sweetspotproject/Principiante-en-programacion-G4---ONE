var secreto = [5,1,8,0];
var input = document.querySelector("input");
input.focus();

function verificar() {
    var encontrado = false;
    for(var posicion = 0;posicion < 4;posicion++){
        if (parseInt(input.value) == secreto[posicion]) {
            alert("Usted acerto");
            encontrado = true;
            break;        
        }      
    }
        if (encontrado == false){
            alert("Usted no acerto")
        }
  input.value = "";
  input.focus();
}
var button = document.querySelector("button");
button.onclick = verificar;
 