<?php

$dbh = new PDO("mysql:host=wsdata.willowshelley.com;dbname=wsdata", 'willowshelley','Fire.12');
$entry = $_GET['entry'];
$sql = $dbh->prepare("SELECT answer FROM chatspeak WHERE question = ?");
$sql->bindValue(1,$entry);  
$sql->execute();
$num = 0;
while ($row = $sql->fetch()){
  echo '<p>' . $row[0] . '</p>';
  $num ++;
} 
if ($num == 0){
  echo '<p>I apologize. 
    My robot knowledge lacks the answer to that question.  
    Please e-mail Willow at willowshelley@gmail.com for a personal answer to that question.</p>'
;
}

?>