<?php

	$con=mysqli_connect("localhost","root","password","tradesma");
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}



	// $sql = 'SELECT * from client_signal_random;';

	$sql =
		'SELECT * '.

		'FROM `client_signal_random`, '.
		'	(SELECT FLOOR((RAND() * (86400-0+1))+0) as `limit`) as a '.

		'WHERE location > a.`limit` '.
		 
		'ORDER BY location ASC '. 

		'LIMIT 1';

	$res = mysqli_query($con,$sql) or die('Query fail : '.mysqli_error());

	$data = mysqli_fetch_assoc($res);

	mysqli_close($con);

// echo '<pre>';
	echo json_encode($data);


