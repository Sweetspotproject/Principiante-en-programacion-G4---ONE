var screen = document.querySelector("canvas");
var pincel = screen.getContext("2d");

pincel.fillStyle = "darkgreen";
pincel.fillRect(200, 50, 350, 300);

pincel.fillStyle = "black";
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);

pincel.fillStyle = "black";
pincel.fillRect(340, 200, 70, 100);

pincel.fillStyle = "black";
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);
