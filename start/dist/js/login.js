"use strict";var page={login:function(){$("#submit").on("click",function(){$.ajax({url:"../../php/login.php",dataType:"json",type:"post",data:{username:$("#un").val(),password:$("#ps").val()},success:function(a){1==a.code&&(location.href="../pages/index.html",localStorage.setItem("username",a.data.username))}})})}};page.login();