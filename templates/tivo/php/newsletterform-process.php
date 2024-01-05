<?php
$errorMSG = "";

if (empty($_POST["email"])) {
    $errorMSG = "Por favor ingrese un correo ";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["Terminos"])) {
    $errorMSG = "Marque la casilla ";
} else {
    $terms = $_POST["Terminos"];
}

$EmailTo = "lautaroledesma2021@gmail.com";
$Subject = "Contacto desde landing-tivo";

// prepare email body text
$Body = "";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Terminos: ";
$Body .= $terms;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "De:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Éxito";
}else{
    if($errorMSG == ""){
        echo "Algo salió mal :(";
    } else {
        echo $errorMSG;
    }
}
?>