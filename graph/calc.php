<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Calculator</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<script src="http://code.highcharts.com/stock/highstock.js"></script>
<script src="http://code.highcharts.com/stock/modules/exporting.js"></script>
</head>
<body>

 
 
<?php
date_default_timezone_set('America/Los_Angeles');

//Find all .csv files
$files = glob('*.csv');
$dates = array();
for($i=0;$i<count($files);$i++){
	$str = substr($files[$i],-14, -4);
	$dates[] = $str;
}
sort($dates);

//Get data from csv files
$tmpFile = tempnam('tmp/','highchart_');
$out = fopen($tmpFile, "w");
fputs($out, '[');
for($i=0;$i<count($files);$i++){
    if (($handle = fopen($files[$i], "r")) !== FALSE) {
		$isfirst = true;
        while (($data = fgetcsv($handle, 1000, ',')) !== FALSE) {
			if ($isfirst){
				$isfirst = false;
				continue;
			}
            $timestamp = strtotime($data[0].' '.$data[1]);
            fputs($out, '['.(int)$timestamp.','.(float)$data[2].','.(float)$data[3].','.(float)$data[4].','.(float)$data[5].','.(float)$data[12].','.(float)$data[13].']');
        }
        fclose($handle);
    }
}
fputs($out, ']');
fclose($out);
$url = str_replace($_SERVER["DOCUMENT_ROOT"], "", $tmpFile);
?>


<script type="text/javascript">
$(function() {
	var seriesOptions = [],
		yAxisOptions = [],
		seriesCounter = 0,
		names = ['CBS min', 'CBS max', 'CBS avg. peak min', 'CBS avg. peak max', 'LKFS', 'LRA' ],
		colors = Highcharts.getOptions().colors;

	$.getJSON('<? echo $url ?>',    function(data) {
        $.each(names, function(i, name) {
            seriesOptions[i] = {
                name: name,
                data: $.map(data, function(el, idx){ return [el[0], el[i+1]]})
            };

            seriesCounter++;

            if (seriesCounter == names.length) {
                createChart();
            }
        });
}); 



	// create the chart when all data is loaded
	function createChart() {

		$('#container').highcharts('StockChart', {
		    chart: {
		    },

		    rangeSelector: {
		        selected: 4
		    },

		    yAxis: {
		    	labels: {
		    		formatter: function() {
		    			return (this.value > 0 ? '+' : '') + this.value + '%';
		    		}
		    	},
		    	plotLines: [{
		    		value: 0,
		    		width: 2,
		    		color: 'silver'
		    	}]
		    },
		    
		    plotOptions: {
		    	series: {
		    		compare: 'percent'
		    	}
		    },
		    
		    tooltip: {
		    	pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
		    	valueDecimals: 2
		    },
		    
		    series: seriesOptions
		});
	}

});
</script>

<div id="container" style="height: 500px; min-width: 600px"></div>

</body>
</html>