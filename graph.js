function init(){

	$.preloadImages(['image_1_above/1.png','line green-above line0 hide'],
					['image_1_above/2.png','line green-above line0 hide'],
					['image_1_above/3.png','line green-above line0 hide'],
					['image_1_below/1.png','line green-below line0 hide'],
					['image_1_below/2.png','line green-below line0 hide'],
					['image_1_below/3.png','line green-below line0 hide'],
					['image_2/1.png','line blue-above line0 hide'],
					['image_2/2.png','line blue-above line0 hide'],
					['image_2/3.png','line blue-above line0 hide'],
					['image_2/1.png','line blue-below line0 hide'],
					['image_2/2.png','line blue-below line0 hide'],
					['image_2/3.png','line blue-below line0 hide'],

					['image_1_above/1.png','line green-above line1 hide'],
					['image_1_above/2.png','line green-above line1 hide'],
					['image_1_above/3.png','line green-above line1 hide'],
					['image_1_below/1.png','line green-below line1 hide'],
					['image_1_below/2.png','line green-below line1 hide'],
					['image_1_below/3.png','line green-below line1 hide'],
					['image_2/1.png','line blue-above line1 hide'],
					['image_2/2.png','line blue-above line1 hide'],
					['image_2/3.png','line blue-above line1 hide'],
					['image_2/1.png','line blue-below line1 hide'],
					['image_2/2.png','line blue-below line1 hide'],
					['image_2/3.png','line blue-below line1 hide'],

					['image_1_above/1.png','line green-above line2 hide'],
					['image_1_above/2.png','line green-above line2 hide'],
					['image_1_above/3.png','line green-above line2 hide'],
					['image_1_below/1.png','line green-below line2 hide'],
					['image_1_below/2.png','line green-below line2 hide'],
					['image_1_below/3.png','line green-below line2 hide'],
					['image_2/1.png','line blue-above line2 hide'],
					['image_2/2.png','line blue-above line2 hide'],
					['image_2/3.png','line blue-above line2 hide'],
					['image_2/1.png','line blue-below line2 hide'],
					['image_2/2.png','line blue-below line2 hide'],
					['image_2/3.png','line blue-below line2 hide'],

					['image_1_above/1.png','line green-above line3 hide'],
					['image_1_above/2.png','line green-above line3 hide'],
					['image_1_above/3.png','line green-above line3 hide'],
					['image_1_below/1.png','line green-below line3 hide'],
					['image_1_below/2.png','line green-below line3 hide'],
					['image_1_below/3.png','line green-below line3 hide'],
					['image_2/1.png','line blue-above line3 hide'],
					['image_2/2.png','line blue-above line3 hide'],
					['image_2/3.png','line blue-above line3 hide'],
					['image_2/1.png','line blue-below line3 hide'],
					['image_2/2.png','line blue-below line3 hide'],
					['image_2/3.png','line blue-below line3 hide']
				);
}

$.preloadImages = function() {
	var imgsWrapper = $('.graph-imgs-wrapper');
	for (var i = 0; i < arguments.length; i++) {
		$("<img />")
			.attr("src", arguments[i][0])
			.addClass(arguments[i][1])
			.appendTo(imgsWrapper);
	}

	imgsWrapper.appendTo($('.graph-wrapper'));
}

function getLine(data,h){

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

function executeChange(data,col,h){

	var $line = $('.line').eq(col);
	var top = getLine(data,h);

	$line.css('top',top);

	if(top<(h*5)){
		// $('.sound_1').get(0).play()

		$('.line.green-below.line'+col)
			// .eq(col)
			.removeClass('hide')

		$('.line.blue-below.line'+col)
			// .eq(col)
			.removeClass('hide')

	}else if(top>(h*6)){
		// $('.sound_1').get(0).play()

		$('.line.green-above.line'+col)
			// .eq(col)
			.removeClass('hide')

		$('.line.blue-above.line'+col)
			// .eq(col)
			.removeClass('hide')
	}else{
		$('.line.green-above.line'+col)
			// .eq(col)
			.addClass('hide')

		$('.line.blue-above.line'+col)
			// .eq(col)
			.addClass('hide')

	}
}

function updateGraph(col,h){

	$.getJSON('http://localhost:8080/php/get_data.php?t='+Date.now())
		.done(function(data){

			executeChange(data,col,h);

			// setTimeout(
			// 	function(){
			// 		updateGraph(col,h);
			// 	},
			// 	data.interval * 1000
			// );
		})
}

$(function(){

	init();

	h = $('.img').height()/11;

	updateGraph(0,h);
	updateGraph(1,h);
	updateGraph(2,h);
	updateGraph(3,h);
});
