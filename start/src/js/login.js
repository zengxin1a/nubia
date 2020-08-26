var page = {
    login:function () {
        $("#submit").on("click",function () {
            $.ajax({
                url:"../../php/login.php",
                dataType:"json",
                type:"post",
                data:{
                    username:$("#un").val(),
                    password:$("#ps").val()
                },
                success:function (data) {
                    if (data.code==1){
                        location.href="../pages/index.html";
                        localStorage.setItem("username",data.data.username);
                    }
                }
            })
        })
    }
};

page.login();