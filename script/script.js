var start = document.getElementsByClassName("Empezar")[0];
start.addEventListener("click", function () {
  setInterval(restarTiempo, 1000);
});

document.getElementById("jugador").addEventListener("mouseover", sumarPuntos);

puntos = 0;
necesarios = 40;
function sumarPuntos() {
  puntos++;
  document.getElementById("puntos").innerHTML =
    "Points: <b>" + puntos + "/" + necesarios + " </b>";
  randNum = Math.round(Math.random() * 500);
  randNum2 = Math.round(Math.random() * 500);
  document.getElementById("jugador").style.marginTop = randNum + "px";
  document.getElementById("jugador").style.marginLeft = randNum2 + "px";

  if (puntos == 40) {
    alert("No eres tan malo despues de todo");
  }
}

tiempo = 30;
function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML = "Tiempo: " + tiempo;
  if (tiempo == 0) {
    alert("Has perdido pedazo de malo");
    tiempo = 0;
    puntos = 0;
  }
}
