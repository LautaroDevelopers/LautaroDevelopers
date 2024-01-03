<<<<<<< HEAD
//Efecto Type - Home
=======
// ! Efecto Type - Home
>>>>>>> 3b8a59c (Plantilla para agencias terminada al 100%)

var text = document.getElementById("Efecto_maquina");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 195;
var i = 0;

//typewriter effect
function typewriter() {
<<<<<<< HEAD
    if (i < str.length) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
=======
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
>>>>>>> 3b8a59c (Plantilla para agencias terminada al 100%)
}

setTimeout(typewriter, speed);
