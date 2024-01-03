<?php
//Lamdado de campos

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

//Datos para el correo

$destinatario = "lautaroledesma@televisionalternativa.com.ar";
$asunto = "Contacto desde Porfolio";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Envio de Mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje_enviado.html');

?>