<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["field1"]==""||$_POST["field2"]==""||$_POST["field3"]==""||$_POST["field4"]==""||$_POST["field5"]==""||$_POST["field6"]==""){
echo "Fill All Fields..";
}else{
$subject = $_POST['sub'];
$message = $_POST['field1' + ' ' + 'field2' + ' ' + 'field3' + ' ' + 'field4' + ' ' + 'field5' + ' ' + 'field6'];
$headers = 'YOU GOT AN ERRAND: '. $email2 . "\r\n"; // Sender's Email
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail("kghumaan@umail.iu.edu", $subject, $message, $headers);
echo "Your request has been sent successfuly! Thank you for your feedback";
}
}
?>