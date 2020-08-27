var page = {
    // 页面渲染
    detail:function () {
        $.ajax({
            // url: "../../details.json",
            url: "../../nav-list-g.json",
            dataType: "json",
            success: function (data) {
                var url = location.href;
                var Id = url.split("?");
                Id = Id[1];

                for (var i=0;i<data[0].items.length;i++){
                    // 页面渲染，从index页面点击详情跳转过来，然后根据id从json里获取相应数据渲染
                    if (Id == data[0].items[i].id) {
                        console.log(data[0].items[i])

                        var htmlStr = template('nav-detail',{
                            'json':data[0].items[i]
                        });
                        $('#details-left').html(htmlStr);

                        var main = template("main",{
                            "json":data[0].items[i]
                        })
                        $("#details-right").html(main)
                    }
                }


            }
        })
    },
    cart:function () {
        $("body").on("click",".increase",function () {
            var num = parseInt($(".nums").html())+1;
            $(".nums").html(num)
        })

        $("body").on("click",".reduce",function () {
            if ($(".nums").html()>1){
                var num = parseInt($(".nums").html())-1;
                $(".nums").html(num)
            } else {

            }
        })

        $("body").on("click",".leftCart",function () {

            // console.log(88)
            var user = localStorage.getItem("username");
            // console.log(user)
            if (user==null){
                $("#tip").show()

            } else {
                var name = $(".title").html();
                var id = $(".bigImgLeft").attr("data-id");
                var price = $(".price").html().split("￥")[1];
                var num = $(".nums").html();
                var img = $(".bigImgLeft").attr("src");


                $.ajax({
                    url: "../../php/addwq.php",
                    data:{
                        name:name,
                        id:id,
                        price:price,
                        num:num,
                        img:img
                    },
                    type:"post",
                    dataType: "json",
                    success:function (data) {

                    }
                })
                location.href = "./cart.html"
            }


        })
    },
    common:function () {
        $("body").on("mouseover",".inCart div",function () {
            $(this).siblings().removeClass("active");
            $(this).addClass("active")
        }).on("mouseout",".inCart",function () {
            $(this).find("div").removeClass("active")
        })

        $("#tip span").click(function () {
            $("#tip").hide()
        })


    }
}

page.detail()
page.cart()
page.common()