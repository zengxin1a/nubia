var page = {
    signIn:function () {
        $("#submit").on("click",function () {
            $.ajax({
                url:"../../php/signIn.php",
                type:"POST",
                dataType:"json",
                data:{
                    username: $("#un").val(),
                    password: $("#ps").val()
                },
                success:function () {
                    location.href="../pages/index.html";
                }
            })
        })
    }
};

page.signIn();