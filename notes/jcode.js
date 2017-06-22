$(document).ready(function() {
	$('#html > ul').hide();
	$('#h1').hide();
	$('#h12').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('.css').hide(); 
	$('#nav2').hide();
	$('#nav3').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
	
//Home
$('#header').click(function () {
	$('#html').show();
	$('#html').css('width','400px');
	$('#html').css ('cursor', 'pointer');
	$("#html > h2").show();
	$('#html > ul').hide();
	$('#h1').hide();
	$('#h12').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('#css').show();
	$('.css').hide();
	$("#css > h2").show();
	$('#css').css('width','400px');
	$('#css').css ('cursor', 'pointer');
	$('#css').css('margin','0 0 0 400px');
	$('#nav').show();
	$('#nav2').hide();
	$('#nav3').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});
		
//HTML
$('#html').click(function () {
	$('#css').hide(function(){
		$(this).css ('width', '0px');
		$('#nav').hide();
		$('#nav2').show();
		$('#nav3').hide();
	});
	$("#html").animate({width:'800px',},500, function(){
		$('#html > h2').hide();
		$(this).css ('cursor', 'default');
		$('#html > ul').show();
		$('#htmlimg').show();
	});
});
	
//CSS
$('#css').click(function () {
	$('#html').hide(function(){
		$(this).css ('width', '0px');	
		$('#nav').hide();
		$('#nav2').hide();
		$('#nav3').show();
	});
	$("#css").animate({width:'800px',margin:'0 0 0 0px',},500, function(){
		$("#css > h2").hide();
		$(this).css ('cursor', 'default');
		$("#cssText").show();
	});
});
	
// --- INTERNAL PAGES --- //

//HTML - Encoding (h1)
$('#encoding').click(function () {
	$('#h12').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('#h1').fadeIn('slow');
});

//HTML - Encoding2 (h12)
$('#encoding2').click(function () {
	$('#h1').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('#h12').fadeIn('slow');
});
	
//HTML - Input (h2)
$('#input').click(function () {
	$('#h1').hide();
	$('#h12').hide();
	$('#h22').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('#h2').fadeIn('slow');
});

//HTML - Input2 (h22)
$('#input2').click(function () {
	$('#h1').hide();
	$('#h12').hide();
	$('#h2').hide();
	$('#h3').hide();
	$('#h4').hide();
	$('#h22').fadeIn('slow');
});

//HTML - Form (h3)
$('#form').click(function () {
	$('#h1').hide();
	$('#h12').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h3').fadeIn('slow');
	$('#h4').hide();
});

//HTML - Fieldset (h4)
$('#fieldset').click(function () {
	$('#h1').hide();
	$('#h12').hide();
	$('#h2').hide();
	$('#h22').hide();
	$('#h4').fadeIn('slow');
	$('#h3').hide();
});

//CSS - Web1 (c1)
$('#web1').click(function () {
	$('#frontPage').hide();
	$('#c1').fadeIn('slow');
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Web2 (c2)
$('#web2').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').fadeIn('slow');
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Web3 (c3)
$('#web3').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').fadeIn('slow');
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Web4 (c4)
$('#web4').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').fadeIn('slow');
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Backgrounds (c5)
$('#back').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').fadeIn('slow');
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Text (c6)
$('#text').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').fadeIn('slow');
	$('#c7').hide();
	$('#c8').hide();
});

//CSS - Typography (c7)
$('#type').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').fadeIn('slow');
	$('#c8').hide();
});

//CSS - Borders (c8)
$('#borders').click(function () {
	$('#frontPage').hide();
	$('#c1').hide();
	$('#c2').hide();
	$('#c3').hide();
	$('#c4').hide();
	$('#c5').hide();
	$('#c6').hide();
	$('#c7').hide();
	$('#c8').fadeIn('slow');
});

}); //Ends Document