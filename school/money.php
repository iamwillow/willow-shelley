<?
// Penny on the first day. 
// Money is doubled every day thereafter
$money = .01;
for($i = 1; $i<32; $i++){
	echo 'Day:' . $i . ': $' . $money . '<br/>';
	$money *= 2;
}
?>