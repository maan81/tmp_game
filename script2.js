function setLine(data,h){
// console.log('limit: '+data.limit)
// console.log('location : '+data.location)
// console.log('h : '+h)

	var num = (parseInt(data.limit)/parseInt(data.location)*h);

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

		// case '100_ABOVE': return parseInt(data.limit)/parseInt(data.location)*(h*1);  break;
		// case '90_ABOVE' : return parseInt(data.limit)/parseInt(data.location)*(h*2);  break;
		// case '80_ABOVE' : return parseInt(data.limit)/parseInt(data.location)*(h*3);  break;
		// case '70_ABOVE' : return parseInt(data.limit)/parseInt(data.location)*(h*4);  break;
		// case '60_ABOVE' : return parseInt(data.limit)/parseInt(data.location)*(h*5);  break;
		
		// case '50'       : return parseInt(data.limit)/parseInt(data.location)*(h*6);  break;
		
		// case '60_BELOW' : return parseInt(data.limit)/parseInt(data.location)*(h*7);  break;
		// case '70_BELOW' : return parseInt(data.limit)/parseInt(data.location)*(h*8);  break;
		// case '80_BELOW' : return parseInt(data.limit)/parseInt(data.location)*(h*9);  break;
		// case '90_BELOW' : return parseInt(data.limit)/parseInt(data.location)*(h*10); break;
		// case '100_BELOW': return parseInt(data.limit)/parseInt(data.location)*(h*11); break;
	}
	// console.log('num : '+num)
	return num;
}


function updateGraph(col,h){
	var $line = $('.line').eq(col),
		timestamp = Date.now();

	$.getJSON('http://localhost:8080/odesk/php/get_data.php?col='+col+'&t='+timestamp)
		.done(function(data){

			// move the line by specified amount
			// random, but varies depending upon the location
			var top = setLine(data,h);
			// console.log(top)
			$line.css('top',top);
		
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

	// height of the row
	h = $('.img').height()/11;

	// separate call for each column

	updateGraph(0,h);
	updateGraph(1,h);
	updateGraph(2,h);
	updateGraph(3,h);
});
