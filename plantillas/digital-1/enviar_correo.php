<?php
//Lamdado de campos

$nombre = $_POST["name"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];

//Datos para el correo

$destinatario = "lautaroledesma@televisionalternativa.com.ar";
$asunto = $_POST["asunto"];

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

//Envio de Mensaje
mail($destinatario, $asunto, $carta);
header('Location:contact.html');

?>