<?
if($_POST['submit'] == 'Reserve Lift Tickets'){
	$time = $_POST['time'];
	if($time < 12){
		echo 'Price = 8 bucks.';
	}elseif($time > 11 && $time < 18){
		echo 'Price = 15 bucks.';
	}else{
		echo 'Price = 12 bucks.';
	}
}


?>


<form action = "<?= $_SERVER['PHP_SELF'];?>" method = "post">
what time would you like your ski reservation?
<select name="time">
<?
for ($i=4;$i<23;$i++){
	if($i<12){
		echo '<option value= "' . $i . '">' . $i . ' AM</option>'; 
	}elseif($i==12){
		echo '<option value= "' . $i . '">' . $i . ' PM</option>';
	}else{
		echo '<option value= "' . $i . '">' . ($i - 12) . ' PM</option>'; 
	}
}
?>
</select>
<input type = "submit" name = "submit" value = "Reserve Lift Tickets"/>
</form>


