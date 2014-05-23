<?php
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	if(!empty($request->menu)){
		$data = "var r={resources:".$request->menu."}";
		if(file_put_contents('../../resources/js/resources.js', $data)){
			echo "{\"responseText\":\"Sucess\"}";
			die;	
		}
	}
	echo "{\"responseText\":\"Failure\"}";