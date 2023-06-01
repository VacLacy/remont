<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';


$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

                  
$mail->isSMTP();                                           
$mail->Host = 'smtp.gmail.com';                     
$mail->SMTPAuth = true;                                  
$mail->Username = 'evgabidov@gmail.com';                    
$mail->Password = 'yhmjirzfpyyxxdew';                           
$mail->SMTPSecure = 'ssl';          
$mail->Port = 465;                                 
    
    
    
$mail->isHTML(true); 
$mail->setFrom('evgabidov@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('abidovevgenij@gmail.com');     // Кому будет уходить письмо 

                                  // Set email format to HTML

$mail->Subject = 'ВАШ РЕМОНТ';
$mail->Body    = 'Новая заявка! <br> Имя ' .$name . '.<br> Телефон: ' .$phone. '<br> Почта: ' .$email;

$mail->send();
header('location: index.html');

    