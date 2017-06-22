<?php
$dbh = new PDO("mysql:host=wsdata.willowshelley.com;dbname=wsdata", 'willowshelley','Fire.12');
$entry = $_GET['entry'];
$sql = $dbh->prepare("SELECT id,question FROM chatspeak WHERE question LIKE ? LIMIT 0, 4");
$sql->bindvalue(1, $entry . '%');
$sql->execute();
while ($row = $sql->fetch()){
echo '<p onClick="fillin(this)">' . $row[1] . '</p>';
} 
?>