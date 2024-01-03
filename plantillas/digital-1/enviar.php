<?php
//Lamdado de campos

$nombre = $_POST["name"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];
$asunto = $_POST["asunto"];

//Datos para el correo

$destinatario = "lautaroledesma@televisionalternativa.com.ar";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

//Envio de Mensaje
mail($destinatario, $asunto, $carta);
header('Location: contact.html');

?>