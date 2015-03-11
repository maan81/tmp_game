<?php

	$con=mysqli_connect("localhost","root","password","tradesma");
	if (mysqli_connect_errno()){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}


	$sql =
		'SELECT signal_value,location,`interval`,a.`random` '.

		'FROM `client_signal_random`, '.

			// SELECT FLOOR((RAND() * (max-min))+min)
			// max = largest number in client_signal.location
			// min = smallest number in client_signal.location
		'	(SELECT FLOOR((RAND() * (86400-0.5))+0.5) as `random`) as a '.

		'WHERE location > a.`random` '.
		 
		'ORDER BY location ASC '. 

		'LIMIT 1';

	$res = mysqli_query($con,$sql) or die('Query fail : '.mysqli_error());

	$data = mysqli_fetch_assoc($res);

	mysqli_close($con);

	echo json_encode($data);


