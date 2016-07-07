<DOCTYPE! html>
<html>
<head>
<meta charset="UTF-8">
<?php
	$CL_sms_Serv = "ErrandBoi Request:";
	$subject = $CL_sms_Serv;
	$to = 3177302557@sms.att.net;
	$name = $_POST['name']
	$contact = $_POST['contact']
	$location = $_POST['location']
	$misc = $_POST['misc']
	$task = $_POST['task']
	$message = $name and $contact and $location and $misc and $task

	mail($to, $subject, $message);
?>

<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link href="style2.css" rel="stylesheet" />
<title>Thank you!</title>

</head>
<body>
<div id="container">
	<header>
		<h1 class="title">ErrandBoi</h1>
	</header>
	<div id="banner">
		<h2>Bet, we got your back!</h2>
	</div>
	<div id="content">
		<p class="content">Someone has been informed to help you out as soon as possible! Please keep in mind that we may contact you if your instructions were unclear or if the request can not be met. We thank you for your patience!</p>
</div>
</div>
</body>
</html>