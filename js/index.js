$(function() {

	function euroFormatter(v, axis) {
		return v.toFixed(axis.tickDecimals) + "€";
	}

	function doPlot(position) {
		var chart = $.plot("#placeholder", [
			{ data: oilprices, label: "Oil price ($)" },
			{ data: exchangerates, label: "USD/EUR exchange rate", yaxis: 2 }
		], 
		{
 			axisLabels: {
            	show: true
        	},
        	xaxes: [{ axisLabel: 'time',
        			mode: "time"
        	}],
			yaxes: [ { min: 0 ,
			axisLabel: 'Oil price'},
			{
			position: position,
			tickFormatter: euroFormatter,
			axisLabel: 'USD/EUR exchange rate'
			} ],
			legend: { position: "sw" },
			zoom: {
				interactive: true
			},
			pan: {
				interactive: true
			}
		});


	}

	doPlot("right");
});