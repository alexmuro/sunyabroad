<?php
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	if(!empty($request->menu) && !empty($request->subMenu)){
		$data = "var m={menu:".$request->menu.",subMenu:".$request->subMenu."}";
		if(file_put_contents('../../resources/js/menu.js', $data)){
			echo "{\"responseText\":\"Sucess\"}";
			die;	
		}
	}
	echo "{\"responseText\":\"Failure\"}";