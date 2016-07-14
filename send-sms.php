<?php
require 'twilio-php-master/Services/Twilio.php'; 
 
$account_sid = 'AC713965b7bfb22cfd4658cb9ff997894a'; 
$auth_token = 'bfe1503835b4966d5a78e081ea5c260c'; 
$client = new Services_Twilio($account_sid, $auth_token); 
 
$client->account->messages->create(array( 
	'To' => "3177302557", 
	'From' => "+13173644864", 
	'Body' => "yo wassup dawg",   
)); 
?>
