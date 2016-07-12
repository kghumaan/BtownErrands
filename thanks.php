<DOCTYPE! html>
<html>
<head>
<meta charset="UTF-8">

<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="style2.css" rel="stylesheet"/>
<title>Thank you!</title>

</head>
<body>
<div id="container">
	<header>
		<h1 class="title">BTown Errands</h1>
	</header>
	<div id="banner">
		<h2>Bet, we got your back!</h2>
	</div>
	<div id="content">
		<p class="content">Someone has been informed to help you out as soon as possible! Please keep in mind that we may contact you if your instructions were unclear or if the request can not be met. We thank you for your patience!</p>
</div>
</div>
<?php
if(isset($_POST["submit"])){
	echo "YOOOOO";
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
</body>
</html>