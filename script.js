function setLine(h,c,val){

	switch(val){

		case '100_ABOVE': return c+(h*0); break;
		case '90_ABOVE' : return c+(h*1); break;
		case '80_ABOVE' : return c+(h*2); break;
		case '70_ABOVE' : return c+(h*3); break;
		case '60_ABOVE' : return c+(h*4); break;
		
		case '50'       : return c+(h*5); break;
		
		case '60_BELOW' : return c+(h*6); break;
		case '70_BELOW' : return c+(h*7); break;
		case '80_BELOW' : return c+(h*8); break;
		case '90_BELOW' : return c+(h*9); break;
		case '100_BELOW': return c+(h*10); break;
	}
}

function updateGraph(){

	var $line0 = $('#line0'),
		$line1 = $('#line1'),
		$line2 = $('#line2'),
		$line3 = $('#line3'),

		h = $('.img').height()/11,
		c = h/2;

	$.getJSON('http://localhost:8080/odesk/php/getstatus.php',function(data){

		$line0.css('top',setLine(h,c,data[0]));
		$line1.css('top',setLine(h,c,data[1]));
		$line2.css('top',setLine(h,c,data[2]));
		$line3.css('top',setLine(h,c,data[3]));
	})
};

$(function(){

	updateGraph();
	setInterval(updateGraph,1000);
});
