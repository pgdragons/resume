<?php 
	// header("Content-type",)
	// 获取客户端请求的数据,客户端的请求方式是get请求,
	// 参数是username和password
	$un = $_GET["username"];
	$pwd = $_GET["password"];

	if ($un == '888888' && $pwd == '123456') {
		echo "http://localhost/day40/images/01.jpg";
	}else{
		echo "登入失败";
	}
 ?>