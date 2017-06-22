$(document).ready(function() {
  // hides elements
  	$('#exit').hide();
	$('#S1').hide();
	$('#S1B1').hide();
	$('#S1B2').hide();
	$('#S2').hide();
	$('#S2B1').hide();
	$('#S2B2').hide();
	$('#S3').hide();
	$('#S3B1').hide();
	$('#S3B2').hide();
	$('#S4').hide();
	$('#S4B1').hide();
	$('#S4B2').hide();
	$('#S5').hide();
	$('#S5B1').hide();
	$('#S5B2').hide();
	$('#S6').hide();
	$('#S6B1').hide();
	$('#S6B2').hide();
	$('#S7').hide();
	$('#S7B1').hide();
	$('#S7B2').hide();
	$('#S8').hide();
	$('#S8B1').hide();
	$('#S8B2').hide();
	$('#S9').hide();
	$('#S9B1').hide();
	$('#S9B2').hide();
	$('#S10').hide();
	$('#S10B1').hide();
	$('#S10B2').hide();
	$('#S11').hide();
	$('#S11B1').hide();
	$('#S11B2').hide();
	$('#S12').hide();
	$('#S12B1').hide();
	$('#S12B2').hide();
	$('#end1').hide();
	$('#end2').hide();
	$('#end3').hide();
	$('#end4').hide();
	$('#end5').hide();
	$('#end6').hide();
	$('#theEnd').hide();
	
	$('#exit').click(function() {
		//Exit button
		$('#exit').hide();
		$('#title').show();
		$('#story').show();
		$('#S1').hide();
		$('#S1B1').hide();
		$('#S1B2').hide();
		$('#S2').hide();
		$('#S2B1').hide();
		$('#S2B2').hide();
		$('#S3').hide();
		$('#S3B1').hide();
		$('#S3B2').hide();
		$('#S4').hide();
		$('#S4B1').hide();
		$('#S4B2').hide();
		$('#S5').hide();
		$('#S5B1').hide();
		$('#S5B2').hide();
		$('#S6').hide();
		$('#S6B1').hide();
		$('#S6B2').hide();
		$('#S7').hide();
		$('#S7B1').hide();
		$('#S7B2').hide();
		$('#S8').hide();
		$('#S8B1').hide();
		$('#S8B2').hide();
		$('#S9').hide();
		$('#S9B1').hide();
		$('#S9B2').hide();
		$('#S10').hide();
		$('#S10B1').hide();
		$('#S10B2').hide();
		$('#S11').hide();
		$('#S11B1').hide();
		$('#S11B2').hide();
		$('#S12').hide();
		$('#S12B1').hide();
		$('#S12B2').hide();
		$('#end1').hide();
		$('#end2').hide();
		$('#end3').hide();
		$('#end4').hide();
		$('#end5').hide();
		$('#end6').hide();
		$('#theEnd').hide();
	});
  
	$('#story').click(function() {
		//Drop down for S1
		$('#title').hide();
		$('#story').hide();
		$('#exit').show();
		$('#S1').slideDown('slow', function() {
			$('#S1B1').slideDown('slow', function() {});
			$('#S1B2').slideDown('slow', function() {});
		});
	});
	
	$('#S1B1').click(function() {
		//Drop down for S2
		$('#S1B2').hide();
		$('#S1B1').css('float', 'none');
		$('#S2').slideDown('slow', function() {
			$('#S2B1').slideDown('slow', function() {});
			$('#S2B2').slideDown('slow', function() {});
		});
	});
	
	$('#S1B2').click(function() {
		//Drop down for S3
		$('#S1B1').hide();
		$('#S1B2').css('float', 'none');
		$('#S1B2').css('margin-left', '470px');
		$('#S3').slideDown('slow', function() {
			$('#S3B1').slideDown('slow', function() {});
			$('#S3B2').slideDown('slow', function() {});
		});
	});
	
	$('#S2B1').click(function() {
		//Drop down for S2
		$('#S2B2').hide();
		$('#S2B1').css('float', 'none');
		$('#S4').slideDown('slow', function() {
			$('#S4B1').slideDown('slow', function() {});
			$('#S4B2').slideDown('slow', function() {});
		});
	});
	
	$('#S2B2').click(function() {
		//Drop down for S5
		$('#S2B1').hide();
		$('#S2B2').css('float', 'none');
		$('#S2B2').css('margin-left', '470px');
		$('#S5').slideDown('slow', function() {
			$('#S5B1').slideDown('slow', function() {});
			$('#S5B2').slideDown('slow', function() {});
		});
	});
	
	$('#S4B1').click(function() {
		//Drop down for S6 from S4
		$('#S4B2').hide();
		$('#S4B1').css('float', 'none');
		$('#S6').slideDown('slow', function() {
			$('#S6B1').slideDown('slow', function() {});
			$('#S6B2').slideDown('slow', function() {});
		});
	});
	$('#S5B1').click(function() {
		//Drop down for S6 from S5
		$('#S5B2').hide();
		$('#S5B1').css('float', 'none');
		$('#S6').slideDown('slow', function() {
			$('#S6B1').slideDown('slow', function() {});
			$('#S6B2').slideDown('slow', function() {});
		});
	});
	$('#S3B1').click(function() {
		//Drop down for S6 from S3
		$('#S3B2').hide();
		$('#S3B1').css('float', 'none');
		$('#S6').slideDown('slow', function() {
			$('#S6B1').slideDown('slow', function() {});
			$('#S6B2').slideDown('slow', function() {});
		});
	});
	
	$('#S6B1').click(function() {
		//Drop down for S7
		$('#S6B2').hide();
		$('#S6B1').css('float', 'none');
		$('#S7').slideDown('slow', function() {
			$('#S7B1').slideDown('slow', function() {});
			$('#S7B2').slideDown('slow', function() {});
		});
	});
	
	$('#S6B2').click(function() {
		//Drop down for S8
		$('#S6B1').hide();
		$('#S6B2').css('float', 'none');
		$('#S6B2').css('margin-left', '470px');
		$('#S8').slideDown('slow', function() {
			$('#S8B1').slideDown('slow', function() {});
			$('#S8B2').slideDown('slow', function() {});
		});
	});
	
	$('#S7B2').click(function() {
		//Drop down for S9
		$('#S7B1').hide();
		$('#S7B2').css('float', 'none');
		$('#S7B2').css('margin-left', '470px');
		$('#S9').slideDown('slow', function() {
			$('#S9B1').slideDown('slow', function() {});
			$('#S9B2').slideDown('slow', function() {});
		});
	});
	
	$('#S8B2').click(function() {
		//Drop down for S10 from S8
		$('#S8B1').hide();
		$('#S8B2').css('float', 'none');
		$('#S8B2').css('margin-left', '470px');
		$('#S10').slideDown('slow', function() {
			$('#S10B1').slideDown('slow', function() {});
			$('#S10B2').slideDown('slow', function() {});
		});
	});
	$('#S9B2').click(function() {
		//Drop down for S10 from S9
		$('#S9B1').hide();
		$('#S9B2').css('float', 'none');
		$('#S9B2').css('margin-left', '470px');
		$('#S10').slideDown('slow', function() {
			$('#S10B1').slideDown('slow', function() {});
			$('#S10B2').slideDown('slow', function() {});
		});
	});
	
	$('#S10B1').click(function() {
		//Drop down for S11 from S10
		$('#S10B2').hide();
		$('#S10B1').css('float', 'none');
		$('#S11').slideDown('slow', function() {
			$('#S11B1').slideDown('slow', function() {});
			$('#S11B2').slideDown('slow', function() {});
		});
	});
	$('#S12B1').click(function() {
		//Drop down for S11 from S12
		$('#S12B2').hide();
		$('#S12B1').css('float', 'none');
		$('#S11').slideDown('slow', function() {
			$('#S11B1').slideDown('slow', function() {});
			$('#S11B2').slideDown('slow', function() {});
		});
	});
	
	$('#S10B2').click(function() {
		//Drop down for S12
		$('#S10B1').hide();
		$('#S10B2').css('float', 'none');
		$('#S10B2').css('margin-left', '470px');
		$('#S12').slideDown('slow', function() {
			$('#S12B1').slideDown('slow', function() {});
			$('#S12B2').slideDown('slow', function() {});
		});
	});
	
	
	
	$('#S3B2').click(function() {
		//Drop down for end1 from S3
		$('#S3B1').hide();
		$('#S3B2').css('float', 'none');
		$('#S3B2').css('margin-left', '470px');
		$('#end1').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	$('#S4B2').click(function() {
		//Drop down for end1 from S4
		$('#S4B1').hide();
		$('#S4B2').css('float', 'none');
		$('#S4B2').css('margin-left', '470px');
		$('#end1').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	$('#S5B2').click(function() {
		//Drop down for end1 from S5
		$('#S5B1').hide();
		$('#S5B2').css('float', 'none');
		$('#S5B2').css('margin-left', '470px');
		$('#end1').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	$('#S8B1').click(function() {
		//Drop down for end1 from S8
		$('#S8B2').hide();
		$('#S8B1').css('float', 'none');
		$('#end1').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	
	$('#S7B1').click(function() {
		//Drop down for end2
		$('#S7B2').hide();
		$('#S7B1').css('float', 'none');
		$('#end2').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	
	$('#S9B1').click(function() {
		//Drop down for end3
		$('#S9B2').hide();
		$('#S9B1').css('float', 'none');
		$('#end3').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	
	$('#S11B1').click(function() {
		//Drop down for end4
		$('#S11B2').hide();
		$('#S11B1').css('float', 'none');
		$('#end4').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	
	$('#S12B2').click(function() {
		//Drop down for end5
		$('#S12B1').hide();
		$('#S12B2').css('float', 'none');
		$('#S12B2').css('margin-left', '470px');
		$('#end5').slideDown('slow', function() {
			$('#theEnd').slideDown('slow', function() {});
		});
	});
	
});//Ends document
