<?php

//$conn = mysqli_connect("localhost","root","","vuetify");

include 'db.php';

if(isset($_POST['emailId'])){
	$emailId = $_POST['emailId'];
} else {
	$emailId = "";
}
if(isset($_POST['password'])){
	$password = $_POST['password'];
} else {
	$password = "";
}

if($emailId == "" && $password == ""){
	$response['meta'] = array('status' => 404,'message' => 'Fields are missing');
	echo json_encode($response);
	exit;
}

try{

	$query = "SELECT * FROM `signup` WHERE `emailId`='".$emailId."' AND `password`='".$password."'";

	$result = mysqli_query($conn, $query);

	
	

	$response['meta'] = array('status' => 200,'message' => 'Login Successfully');
	$response['data'] = array('data' => $userDetail);

} catch (Exception $e) {
	$response['meta'] = array('status' => 500,'message' => $e->getMessage());
}

echo json_encode($response);

?>