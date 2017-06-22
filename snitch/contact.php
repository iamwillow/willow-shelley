<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href='http://fonts.googleapis.com/css?family=Englebert' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="styles/reset.css"/>
<link rel="stylesheet" type="text/css" href="styles/contact.css"/>
<link rel="stylesheet" type="text/css" href="styles/global.css"/>
<link href='http://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' type='text/css'>
<title>Snitch's Bag-O-Loot - Contact</title>
<style type="text/css">
	input {
		width:200px;
		float:right;
		margin-bottom:10px;
	}
	input[type="submit"]{
		width:100px;
		float:right;
		margin-bottom:50px;
	}
	textarea {
		width:350px;
		height:250px;
		resize:none;
		margin-left:-65px;
		margin-bottom:5px;
	}
	form {
		float:left;
	}
	select {
		float:right;
		margin-bottom:10px;
	}
	#rowone {
		float:left;
		margin-left:180px;
	}
	.tp {
		margin-left:180px;
	}
	.ralign {
		text-indent:20px;
	}
</style>
</head>
<body>
<?php include 'top.php'; ?>


<div id="contact">
<?PHP
$submit = $_POST['submit'];
if ($submit){
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$type = $_POST['typeof'];
	$message = $_POST['message'];
	$content = 'Name: ' . $fullname . '<br/> Email: ' . $email . '<br/> E-mail type: ' . $type . '<br/>' . $message;
	$send = mail('support@bag-o-loot.com' , 'Email from bag-o-loot.com' , $content , "Content-type:text/html");
	if ($send) echo 'Thanks for your e-mail. We\'ll be in touch soon';
}
?>
<div class="tp">
<img src="images/barS.png">
		<p style="margin-left:120px;margin-top:-40px;margin-bottom:30px">Contact Us</p>
</div>
<div id="rowone">
<p style="margin-bottom:10px">Name:</p>
<p style="margin-bottom:10px">Email:</p>
<p style="margin-bottom:10px">Type:</p>
</div>

<form action="<?= $_SERVER['PHP_SELF']; ?>" method="post"> 
<input type="text" name="fullname"/><br/>
<input type="email" name="email"/><br/> 
	<select name="typeof">
		<option value="Customer">Customer Inquiry</option>
		<option value="Wholesale">Wholesale Inquiry</option>
		<option value="Other">Other</option>
	</select>
	<br/>
<textarea name="message"></textarea><br/>
<input type="submit" name="submit" value="send email"/>
</form>
<div class="tp">
<img src="images/barS.png">
		<p style="margin-left:90px;margin-top:-40px;margin-bottom:40px">Other Contact Info</p>
		<p style="margin-bottom:10px"><u>Phone</u>:</p>
		<p style="margin-bottom:20px;" class="ralign">(855) 355-GAME (4263)</p>
		<p style="margin-bottom:10px"><u>Shipping Address</u>:</p>
		<p class="ralign">Bag-O-Loot</p>
		<p class="ralign">PO Box 1084</p>
		<p class="ralign">Laconia, NH 03247-1084
</div>


</div> <!-- /contact !-->

<?php include 'footer.php'; ?>
	
</div> <!-- /content !-->
</div> <!-- /background !-->
</body>
</html>