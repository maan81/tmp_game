<?php

function getRand(){

	switch(mt_rand(-6,+6)){
		case +5 : return '100_ABOVE';break;
		case +4 : return '90_ABOVE'; break;
		case +3 : return '80_ABOVE'; break;
		case +2 : return '70_ABOVE'; break;
		case +1 : return '60_ABOVE'; break;
		
		case +6 : return '50';       break;
		case -6 : return '50';       break;
		
		case -1 : return '60_BELOW'; break;
		case -2 : return '70_BELOW'; break;
		case -3 : return '80_BELOW'; break;
		case -4 : return '90_BELOW'; break;
		case -5 : return '100_BELOW';break;

		// for the case when rand = 0
		default: return getRand();
	}
}

$data = array(
	0=>getRand(),
	1=>getRand(),
	2=>getRand(),
	3=>getRand()	
);

echo json_encode($data);