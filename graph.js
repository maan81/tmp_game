function setLine(data,h){

	var num = (parseInt(data.random)/parseInt(data.location)*h);

	switch(data.signal_value){

		case '100_ABOVE': num = num + (h*0);  break;
		case '90_ABOVE' : num = num + (h*1);  break;
		case '80_ABOVE' : num = num + (h*2);  break;
		case '70_ABOVE' : num = num + (h*3);  break;
		case '60_ABOVE' : num = num + (h*4);  break;
		
		case '50'       : num = num + (h*5);  break;
		
		case '60_BELOW' : num = num + (h*6);  break;
		case '70_BELOW' : num = num + (h*7);  break;
		case '80_BELOW' : num = num + (h*8);  break;
		case '90_BELOW' : num = num + (h*9); break;
		case '100_BELOW': num = num + (h*10); break;
	}
	return num;
}


function updateGraph(col,h){
	var $line = $('.line').eq(col);

	$.getJSON('http://localhost:8080/php/get_data.php?t='+Date.now())
		.done(function(data){

			// move the line by specified amount
			// random, but varies depending upon the location
			$line.css('top',setLine(data,h));
		
			// repeat the data call after a specified interval
			// random, but varies depending upon the location
			setTimeout(
				function(){
					updateGraph(col,h);
				},
				data.interval * 1000
			);
		})
}


$(function(){

	// height of the row,
	// calculated from the image.
	h = $('.img').height()/11;

	// separate call for each column
		updateGraph(0,h);
		updateGraph(1,h);
		updateGraph(2,h);
		updateGraph(3,h);
});
