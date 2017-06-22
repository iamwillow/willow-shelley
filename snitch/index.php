<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link href='http://fonts.googleapis.com/css?family=Englebert' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="styles/reset.css"/>
<link rel="stylesheet" type="text/css" href="styles/global.css"/>
<link href='http://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' type='text/css'>
<title>Snitch's Bag-O-Loot</title>
<style type="text/css">
	p {width:440px;}
	.right {margin:30px 0 0 300px;width:400px;}

	#game a, #book a, #toy a {
		border:1px solid black;
		background-image:url(images/button.png);
		padding:5px 10px;
		margin-left:50px;}
	#game a:hover, #book a:hover, #toy a:hover{
		background-image:url(images/buttonH.png);}

	#game {margin:-200px 0 0 200px;}
	#book {margin:80px 0 0 200px;}
	#toy {margin:80px 0 0 200px;}

	#barG {margin:-42px 0 20px 290px;}
	#barB {margin:-42px 0 20px 290px;}	
	#barT {margin:-42px 0 20px 290px;}	
</style>
</head>
<body>

<?php include 'top.php'; ?>

<div id="game">
	<img src="images/barL.png"/>
	<p id="barG" class="bar">The Game</p>
	<img src="images/index/decks.png" class="left"/>
	<p class="right">Bag-O-Loot is a card game the whole family can enjoy. It's a perfect mix of strategy, luck, interaction, and excitement. Both the Classic and Junior editions are available.</p>
	<br/>
	<a href="game.php">Find out more</a>
</div> <!-- /game !-->
	
<div id="book">
	<img src="images/barL.png"/>
	<p id="barB" class="bar">The Book</p>
	<img src="images/index/book.png" class="left"/>
	<p class="right">A children's book all in rhyme. The main character, Snitch the Fraccoon,  lives in a place called Stumpy Village with his friends and is always up for an adventure!</p>
	<br/>
	<a href="book.php">Find out more</a>
</div> <!-- /book !-->
	
<div id="toy">
	<img src="images/barL.png"/>
	<p id="barT" class="bar">The Toy</p>
	<img src="images/index/toy.png" class="left" style="margin-left:30px;"/>
	<p class="right">This high quality plush toy is a perfect compliment to the book and/or the game. He stands a full 15 inches tall, his paws Velcro together to hold your card game or treasure bag, his fur is unbelievably soft and he even comes with a golden bag for storing loot.</p>
	<br/>
	<a href="toy.php" style="margin-left:80px;">Find out more</a>
</div> <!-- /toy !-->

<?php include 'footer.php'; ?>
	
</div> <!-- /content !-->
</div> <!-- /background !-->
</body>
</html>
