<?php
    include('./base.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $con = mysqli_connect('localhost','root','root','shop');

    $sql = "SELECT * FROM `info` WHERE `username`='$username' AND `password`='$password'";

    $res = mysqli_query($con,$sql);

    $row = mysqli_fetch_assoc($res);

    if($row){
        $arr = array('code'=>1,'data'=>array('username'=>$username));
    }else{
        $arr = array('code'=>0,'msg'=>'用户名或密码错误');
    }

    echo json_encode($arr);
?>