// ! Efecto Type - Home

var text = document.getElementById("Efecto_maquina");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 195;
var i = 0;

//typewriter effect
function typewriter() {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }

  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}

setTimeout(typewriter, speed);
