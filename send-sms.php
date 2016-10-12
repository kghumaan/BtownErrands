<?php
header("Location: http://www.btownerrands.com/home/thanks.html");
require 'twilio-php-master/Services/Twilio.php';

$name = $_POST['field1'];
$task = $_POST['field6'];
$email = $_POST['field2'];
$location = $_POST['field3'];
$misc = $_POST['field4'];
$phone = $_POST['field5'];

$account_sid = 'AC713965b7bfb22cfd4658cb9ff997894a'; 
$auth_token = 'bfe1503835b4966d5a78e081ea5c260c'; 
$client = new Services_Twilio($account_sid, $auth_token); 

$client->account->messages->create(array( 
	'To' => "3177302557", 
	'From' => "+13173644864", 
	'Body' => "YOU GOT A NEW ERRAND!!! \nName: $name \nTask: $task \nEmail: $email \nPhone #: $phone \nLocation: $location \nMisc: $misc",   
)); 

?>
