<?php
    include("./base.php");
    $username = $_POST["username"];
    $password = $_POST["password"];

    $con = mysqli_connect("localhost","root","root","user");

    $sql = "SELECT * FROM `info` WHERE `username`='$username'";

    $res = mysqli_query($con,$sql);

    $row = mysqli_fetch_assoc($res);

    if($row){
        $arr = array("code"=>0,"msg"=>"用户名已存在GG");
    }else{
        $sql = "INSERT INTO `info` (`username`,`password`) VALUES ('$username','$password')";

        $res = mysqli_query($con,$sql);

        if($res){
            $arr = array("code"=>1,array("username"=>"$username"));
        }else{
            $arr = array("code"=>0,"msg"=>"注册失败");
        }
    }

    echo json_encode($arr);

?>