<?php

$firstname=$_POST['first_name'];
$lastname=$_POST['last_name'];
$college=$_POST['company'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$event=$_POST['subject'];


$conn=new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('Connection Failed: '.$conn->connect_error);

}else{
    $stmt=$conn->prepare
}

?>